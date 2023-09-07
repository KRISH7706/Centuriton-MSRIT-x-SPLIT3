// SPDX-License-Identifier: MIT


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@gnosis.pm/safe-contracts/contracts/GnosisSafe.sol";
import "@gnosis.pm/safe-contracts/contracts/proxies/ProxyFactory.sol";
import "@gnosis.pm/safe-contracts/contracts/interfaces/IGnosisSafe.sol";
import "@gnosis.pm/safe-contracts/contracts/interfaces/ISignatureValidator.sol";

pragma solidity >=0.7.0 <0.9.0;

contract FractionalizedNFT is ERC20, Ownable, ERC20Permit, ERC721Holder {
    IERC721 public collection;
    uint256 public tokenId;
    bool public initialized = false;
    bool public forSale = false;
    uint256 public salePrice;
    bool public canRedeem = false;

    // Define the multi-signature wallet
    IGnosisSafe public multiSigWallet;

    constructor(address[] memory _owners, uint256 _requiredSignatures) ERC20("MyToken", "MTK") ERC20Permit("MyToken") {
        require(_requiredSignatures <= _owners.length && _requiredSignatures > 0, "Invalid required signatures");

        // Create a multi-signature wallet
        multiSigWallet = ProxyFactory.deployProxy(
            address(0x0), // Use the default master copy address
            abi.encodeWithSignature(
                "setup(address[],uint256,address,bytes,address,address,address,address)",
                _owners,
                _requiredSignatures,
                address(0), // Use default fallback handler
                abi.encodeWithSignature("setFallbackHandler(address)", address(0)),
                address(0x0), // Use default payment handler
                address(0x0), // Use default payment token
                address(0x0)  // Use default refund handler
            )
        );

        signers = _owners;
        requiredSignatures = _requiredSignatures;
    }

    // Modifier to check if the sender is one of the signers
    modifier onlySigner() {
        bool isSigner = false;
        for (uint256 i = 0; i < signers.length; i++) {
            if (msg.sender == signers[i]) {
                isSigner = true;
                break;
            }
        }
        require(isSigner, "Only signers can perform this action");
        _;
    }

    function initialize(address _collection, uint256 _tokenId, uint256 _amount) external onlyOwner {
        require(!initialized, "Already initialized");
        require(_amount > 0, "Amount needs to be more than 0");
        collection = IERC721(_collection);
        collection.safeTransferFrom(msg.sender, address(this), _tokenId);
        tokenId = _tokenId;
        initialized = true;
        _mint(msg.sender, _amount);
    }

    function putForSale(uint256 price) external onlySigner {
        salePrice = price;
        forSale = true;
    }

    function purchase() external payable {
        require(forSale, "Not for sale");
        require(msg.value >= salePrice, "Not enough ether sent");
        require(canRedeem == false, "NFT is currently redeemable, cannot be sold.");
        
        // Check if the required number of signers have approved the sale
        uint256 approvals = 0;
        for (uint256 i = 0; i < signers.length; i++) {
            if (msg.sender == signers[i]) {
                approvals++;
            }
        }
        require(approvals >= requiredSignatures, "Not enough approvals");

        collection.transferFrom(address(this), msg.sender, tokenId);
        forSale = false;
        canRedeem = true;
    }

    function redeem(uint256 _amount) external {
        require(canRedeem, "Redemption not available");
        uint256 totalEther = address(this).balance;
        uint256 toRedeem = _amount * totalEther / totalSupply();

        _burn(msg.sender, _amount);
        payable(msg.sender).transfer(toRedeem);
    }
}
