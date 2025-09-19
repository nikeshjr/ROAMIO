import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from "lucide-react";
import { Link } from 'react-router-dom';
function Getstate() {
    
    const navigate = useNavigate();
    return (
      <>
       <Link to="/" className="custom-button back-button" aria-label="Go back" type="button"><ArrowLeftIcon className="back-button-icon" /></Link>
        <h1>Select the state</h1>
        <img src="\India.png" usemap="#roamMap" alt="Roamio Map" />
        <map name="roamMap">
 
           <area shape="circle" coords="247,709,42" href="#"  onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/getdistrict'); // Navigate to another route
          }}  alt="Region1" />
          </map>
      </>
    )
  }
  
  export default Getstate