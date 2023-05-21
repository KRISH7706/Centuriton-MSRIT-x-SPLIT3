import './Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
    return ( 
        <div className="home">
            <header>
                <h1>Split 3</h1>
            </header>
            <main>
                <div className="homeCard">
                    <Link to="/NFThing">
                        <div className="innerCard">
                            <img src="" alt="" />
                        </div>
                        <p>NFThing</p>
                    </Link>
                </div>
                <div className="homeCard">
                    <Link to="/Broken_Sea">
                        <div className="innerCard">
                            <img src="" alt="" />
                        </div>
                        <p>Broken Sea</p>
                    </Link>
                </div>
                <div className="homeCard">
                    <Link to="/Pizza_Swap">
                        <div className="innerCard">
                            <img src="" alt="" />
                        </div>
                        <p>Pizza Swap</p>
                    </Link>
                </div>
            </main>
        </div>
     );
}
 
export default Home;