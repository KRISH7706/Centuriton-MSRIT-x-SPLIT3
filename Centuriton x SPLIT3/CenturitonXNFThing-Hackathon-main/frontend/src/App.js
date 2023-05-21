import './App.css';
import Base from './Base'
import {  Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Main from './Components/Main';
import Create from './Components/Create';
import MarketPlace from './Components/MarketPlace/MarketPlace';
import Profile from './Components/Profile'
function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Broken_Sea' element={<Base Child=<Main/> />}/>
        <Route path='/Broken_Sea/Create' element={<Base Child=<Create/> />}/>
        <Route path='/Broken_Sea/MarketPlace' element={<Base Child=<MarketPlace/> />}/>
        <Route path='/Broken_Sea/Profile' element={<Base Child=<Profile/> />}/>
      </Routes>
      
    </div>
  );
}

export default App;
