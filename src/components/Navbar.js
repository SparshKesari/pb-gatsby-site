import React from 'react'
import logo from "./logo.png"
import { FaAlignRight } from "react-icons/fa"
import './main.css'


function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                   <img src={logo} alt="logo"/>
                    <button type="button" className="toggle-btn" 
                    // onClick={toggleSidebar}
                    >
                     <FaAlignRight /> 
                    </button>
                </div>
               <ul className="page-links nav-links">
                {/* <li ><a href="#">Home </a></li> */}
                <li ><a href="/#about">About </a></li>
                <li ><a href="/#members">Members </a></li>
                <li ><a href="/#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
