import React from 'react'
import logo from '../../assets/icons/logo.png'
import track_1 from '../../assets/images/track_1.png'
import "./style.css"

const Section_1 = () => {
  return (
    <>
    <div className="grid">
        <div className="grid_item">
            <div className="logo">
              <img src={logo} height = "57px" alt="logo" />
            </div>
            <div className="content">
              <p className='main_heading'>EXPLORE TO LEARN</p>
              <p className='sub_heading'>SEEING the WORLD through UNIQUE LENS</p>
              <p className='des_heading'>We organize finely crafted educational tours</p> 
              <p className='des_heading'>for students and foreigners!</p>
            </div>
            <button className='btn-plan'>PLAN MY TRIP</button>
        </div>
        <div className="grid_item_2">
          <div className="navbar">
            <a href="#">Blogs</a>
            <a href="#">Indian Marvels</a>
            <a href="#">Nearest Centres</a>
            <a href="#">About us</a>
          </div>
          <div className="bg_purple">
          <img src={track_1} alt="trak_image"/>
          </div>
        </div>
    </div>
    </>
  )
}

export default Section_1