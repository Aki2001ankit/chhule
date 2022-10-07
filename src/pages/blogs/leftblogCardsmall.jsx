import React from 'react'

const LeftBlogCard =(props)=>{
    return(<>

       
       {/* 2nd */}
        <div className="row m-auto m-0 p-0">
          
           <div className="col-12  col-sm-7 bg-linear-vary-r">
           <div className='col-7 mx-auto mt-3 mb-3 text-end'>
            <p className='title-style  '>{props.title1}</p>
            <p className='short-desc-style '>{props.desc1}</p>
            
            <button className='blog-extend-button '>10 min read</button>
            </div>
           </div>
           <div className="col-12  col-sm-5 m-0 p-0 m-auto">
            <img classname="img-fluid" src={props.url1} alt="jaipurshort"  />
            
           </div>
        </div>
    </>)
}
export default LeftBlogCard;