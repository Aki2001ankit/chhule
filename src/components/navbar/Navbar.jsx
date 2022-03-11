import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        // Position of navbar is absolute so wrap it with a div when use
        <div className="navbar">
            <Link to='/Blogs'>Blogs</Link>
            <Link to='/IndianMarvels'>Indian Marvels</Link>
            <Link to='/NearestCentres'>Nearest Centres</Link>
            <Link to='/AboutUs'>About us</Link>
        </div>
    )
}

export default Navbar