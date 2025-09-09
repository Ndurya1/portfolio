import React, {useState} from "react";

function Navbar(){
    let [menuOpen, setMenuOpen] =useState(false);
    return(
   
            <div className="navbar-container">
        <header className='navbar-header'>
            <div className="navbar-logo" style={{display:"flex"}}>
                  <h1>Ndurya Muhammad</h1>
            </div>
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li> <a href="#hero">Home</a></li>
                <li> <a href="#about">About</a></li>
                <li> <a href="#work">Work</a></li>
                <li> <a href="#contacts">Contact</a></li>
            </ul>
            <div className="cv">
            <a href=" /Public/MY_CV[1].docx" download="Ndurya-cv">Download CV</a>
            </div>
                 <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
            </div>
        </header>
        </div>
    )
}

export default Navbar
