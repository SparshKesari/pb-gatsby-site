import React from 'react'
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import './main.css'


function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                   {/* <img src="{logo}" alt=""/> */}
                    <button type="button" className="toggle-btn" 
                    // onClick={toggleSidebar}
                    >
                     <FaAlignRight></FaAlignRight>
                    </button>
                </div>
                {/* <PageLinks styleClass = "nav-links"></PageLinks> */}
               <ul className="page-links nav-links">
                {/* <li ><a href="#">Home </a></li> */}
                <li ><a href="/#about-us">About Us </a></li>
                <li ><a href="/#members">Members </a></li>
                <li ><a href="/#contact">Contact Us</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
