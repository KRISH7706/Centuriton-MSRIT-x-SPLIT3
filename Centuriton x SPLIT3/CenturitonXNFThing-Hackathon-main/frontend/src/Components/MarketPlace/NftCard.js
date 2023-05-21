import img from '../../imgs/card_img.png'
import { useState,useEffect } from 'react';
import './NftCard.css'
const NftCard = ({sell}) => {
    const [sellOption,setSellOption]=useState(false);
    useEffect(() => {
        sell==="Yes"?setSellOption(true):setSellOption(false)

      },[sell]);
    return ( 
        <div className="card">
            <div className="imgHolder">
                <img src={img} alt="" />
            </div>
            <h2>Azuki</h2>
            <p>AZUKIJP</p>
            <div id="price">
                <h3>0.015ETH</h3>
                <h3>99/1000</h3>
            </div>
            <p>Floor Price</p>
          {sellOption &&<button id='sell'>Sell</button>}  
        </div>
     );
}
 
export default NftCard;