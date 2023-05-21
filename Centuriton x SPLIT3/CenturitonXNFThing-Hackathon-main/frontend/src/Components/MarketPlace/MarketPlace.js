import './MarketPlace.css'
import NftCard from './NftCard'
import img from '../../imgs/card_img.png'
const MarketPlace = () => {
    const nfts=[
        {
            name:"Azuki",
            collectionName:"Azukijp",
            floorPrice:0.015,
            nftId:99,
            totalNfts:1000,
            imgUrl:img
        },
        {
            name:"Azukifgs",
            collectionName:"Azukijp",
            floorPrice:0.055,
            nftId:90,
            totalNfts:1000,
            imgUrl:img
        }
    ]
    return ( 
        <div className="marketPlace">
            <h1>Marketplace</h1>
            <div className="buttons">
                <button >Sort by</button>
                <button >Categories</button>
            </div>
            <div className="cards">
                <NftCard />
                <NftCard/>
            </div>
        </div>
     );
}
 
export default MarketPlace;