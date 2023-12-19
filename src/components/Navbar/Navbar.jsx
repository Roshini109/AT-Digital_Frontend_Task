import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="navLeft">
            <img src="assets/Logo.png" alt="" className="logo" />
        </div>
        <div className="navRight">
            <div className="navLinks">
                <div className="navLink">SERVICES</div>
                <div className="navLink">ABOUT US</div>
                <div className="navLink">CONTACT US</div>
                <div className="navLink">CAREERS</div>
            </div>
        </div>
    </div>
  )
}
