import React from "react";
import './homevr.css';
import imgadr from "../../assets/images/vr.png";
const Imagesection = () => {
  return (
  <>
     <div className="d-flex col-12 col-md-7  bg-success container1 m-0 p-0">
   
         
     
           <img className="image" src={imgadr} alt="Snow" />
     
           {/* <div className="text-centered-over-image">
          
             <h4>VIRTUAL TOURS FOR YOU!</h4>
           <p>One stop solution using VR and AR technology Exposure to inaccessible places,Bringing various places to you,Real life experience</p>
          
           </div> */}
        
       </div>
  </>
  );
};
export default Imagesection;