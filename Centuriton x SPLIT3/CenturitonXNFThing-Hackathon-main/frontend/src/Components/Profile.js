import  './Profile.css'
import user_img from "../imgs/profile.png"
import NftCard from './MarketPlace/NftCard';
const Profile = () => {
    return ( 
        <div className="profile">
            <div id="user">
                <img src={user_img} alt="" />
                <h1> Otaku</h1>
            </div>
            <div className='btns'>
                <button>Owned</button>
                <button>Listed Items</button>
            </div>
            
            <div className="cards">
                <NftCard sell="Yes"/>
            </div>
        </div>
     );
}
 
export default Profile;