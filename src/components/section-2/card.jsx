import React from 'react';
import Item from './Item';
import { FaBus } from "react-icons/fa";
const Card=(props)=>{
    return(
        <>
 <Item>
          
         
          <div className="buslogo text-center col-12 ">
          <div className=" col-4   m-auto text-center "><FaBus/></div>
        
        </div>
        <div className="col-12 mb-1">
          <h4>{props.label}</h4>
          <h6>{props.route}</h6>
        </div>
        <div className="col-9 text-justify mb-2">
        {props.details}
          
        </div>
        <div className="col-9 text-center mb-3">
        
        <button type="button" className="btn bookbtn btn-block">Book Now</button>
        
        </div>
       
        </Item>
        </>
    )
}
export default Card;
