import './Navbar.css'
import logo from '../imgs/logo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
               <Link to="/Broken_Sea"> 
                 <img src={logo} alt="logo" id='logo' />
                 <h1>Broken Sea</h1>
               </Link>
                <div className="searchBar">
                    <img id="searchIcon" src="https://img.icons8.com/ios-glyphs/30/ffffff/search--v1.png" alt=""/>
                    <input id='search' type="text" placeholder='Search' />
                </div>
                
            </div>
            <ul>
                <Link to="/Broken_Sea/Create"><li>Create</li></Link> 
                <Link to="/Broken_Sea/MarketPlace"><li>Market</li></Link>
                <Link to="/Broken_Sea/Profile"><li>Profile</li></Link>
                
                <li>More</li>
                <li id='connect'>Connect Wallet</li>
            </ul>
        </nav>
     );
}
 
export default Navbar;