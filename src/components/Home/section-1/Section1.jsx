import React from 'react'
import logo from '../../../assets/images/icons/logo.png'
import home_1 from '../../../assets/images/home_1.jpg'
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
          <img src={home_1} alt="image"/>
        </div>
    </div>
    </>
  )
}

export default Section_1