import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>
        <nav className='container'>
        <div className='content'>
            <h3 style={{fontSize:"25px"}}><Link className="nav-link" to="/">BigLotus</Link></h3>
            <p><Link className="nav-link" to="/collections">Collections</Link></p>
            <p><Link className="nav-link" to="/men">Men</Link></p>
            <p><Link className="nav-link" to="/women">Women</Link></p>
            <p><Link className="nav-link" to="/about">About</Link></p>
            <p><Link className="nav-link" to="/contact">Contact</Link></p>
        </div>
        </nav>
    </>
  )
}

export default Navbar
