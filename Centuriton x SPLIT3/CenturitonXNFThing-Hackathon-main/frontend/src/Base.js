import Navbar from './Components/Navbar';

const Base = ({Child}) => {
    return ( 
      <>
        <Navbar/>
          {Child}
      </>
      
     );
}
 
export default Base;