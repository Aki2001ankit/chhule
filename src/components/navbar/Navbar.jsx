import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

import logo from '../../assets/icons/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
    const openMenu =()=>{
        const navWrapper= document.querySelector('.navWrapper')
        const navbar = document.querySelector('.navbar')
        navWrapper.classList.toggle('navWrapper_mb')
        navbar.classList.toggle('navbar_mb')
    }
    return (
        // Position of navbar is absolute so wrap it with a div when use
        <>
            <div className="navWrapper">
                <div className="logo">
                    <img src={logo} height="57px" alt="logo" />
                    <MenuIcon className='menuIcon' sx ={{fontSize :40,color :'white'}} onClick={openMenu} />
                </div>
                <div className="navbar">
                    <Link to='/Blogs'>Blogs</Link>
                    <Link to='/IndianMarvels'>Indian Marvels</Link>
                    <Link to='/NearestCentres'>Nearest Centres</Link>
                    <Link to='/AboutUs'>About us</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar