import React from "react";


const Imagesection = (props) => {
  return (
  <>
     <div className="d-flex col-12 col-md-7  container1 m-auto p-0">
         
         {/* <img src={imgadr} alt="vr" /> */}
         {/* <div className="col-10 bg-danger text-center imgadr align-items-center justify-content-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maiores voluptate tempora fugit, dolores eveniet ipsam, accusantium quia quos placeat ea quibusdam. Consectetur, earum itaque distinctio totam vero perferendis impedit, est odio, ut porro debitis architecto delectus at reprehenderit dolor.
         </div> */}
           <img className="image" src={props.imgurl} alt="Snow" />
     
           <div className="text-centered-over-image">
          
             <h4>{props.title}</h4>
          
          
           </div>
        
       </div>
  </>
  );
};
export default Imagesection;