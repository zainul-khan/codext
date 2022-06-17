import React from 'react'
import { NavLink } from "react-router-dom";
import "../Css/NavStyle.css" 
const Nav = () => {
  return (
    <>
    <header className='myheader'>
    <div className="container container-flex">
        <div className="logoContainer">
        <h3>Codext</h3>
        </div>
        <nav>
            <div className="list">
                <NavLink to="/" className="listItem" >Home</NavLink>
                <NavLink to="/about" className="listItem" >About</NavLink>
                <NavLink to="/services" className="listItem" >Services</NavLink>
                <NavLink to="/contact" className="listItem" >Contact</NavLink>
                <NavLink to="/policy" className="listItem" >Policy</NavLink>
            </div>
        </nav>
        <div className="free-trial">
            <div className="btn btn-primary">Free Trial</div>
        </div>
    </div>
    </header>
    </>
  )
}

export default Nav