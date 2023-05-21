import { useState } from 'react';
import './Create.css'
const Create = () => {
    const [totalFractions,setTotalFractions]=useState(0);
    const [retainedFractions,setRetainedFractions]=useState(0);
    const [price,setPrice]=useState(0);
    const [title,setTitle]=useState(" ");
    const [description,setDescription]=useState(" ");
    const [photo,setPhoto]=useState();
    const totalFractionsHandler=(e)=>{
        setTotalFractions(e.target.value)
    }
    const retainedFractionsHandler=(e)=>{
        setRetainedFractions(e.target.value)
    }
    const priceHandler=(e)=>{
        setPrice(e.target.value)
    }
    const titleHandler=(e)=>{
        setTitle(e.target.value)
    }
    const descriptionHandler=(e)=>{
        setDescription(e.target.value)
    }
    const photoHandler=(e)=>{
        setPhoto(URL.createObjectURL(e.target.files[0]))
        console.log(photo);
    }
    return ( 
        <div className="create">

            <div className="left">
                <div className="photo">
                    <img src={photo} alt="" />
                    <input type="file"  name="photo" id="photo" onChange={photoHandler}/>
                </div>
            </div>

            <div className="right">
                <form action="">
                    <div>
                        <label htmlFor="totalFractions">Total no of fractions</label>
                        <input type="number" id='totalFractions' onChange={totalFractionsHandler} />
                    </div>
                    <div>
                        <label htmlFor="retainedFractions"> No of fractions retained</label>
                        <input type="number" id='retainedFractions' onChange={retainedFractionsHandler} />
                    </div>
                    <div>
                        <label htmlFor="price"> Price</label>
                        <input type="number" id='price' onChange={priceHandler} />
                    </div>
                    <div>
                        <label htmlFor="title"> Title</label>
                        <input type="text" id='title' onChange={titleHandler} />
                    </div>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" cols="30" rows="10" onChange={descriptionHandler}></textarea>
                    <button>List Asset</button>
                </form>
            </div>
        </div>
     );
}
 
export default Create;