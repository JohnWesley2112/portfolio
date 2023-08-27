import React from 'react';
import "../styles/Header.css";
import MyLogo from "../../assets/JW-svg-logo.svg";
import ContactMe from "../../assets/contactMeLogo.png";
import { NavLink } from 'react-router-dom';





function Header() {

  const handleDisplay = () => {
    var x = document.getElementById("contact-details").style;
    if (x.display === "flex") {
      x.display = "none";
    } else {
      x.display = "flex";
    }
  }

  return (
    <div className="header-main-container">
      <div>
        <NavLink to='/'>
          <img id="page-logo" src={MyLogo} alt="my=img" />
        </NavLink>
      </div>
      <ul className='ul-navigation'>
        <li>
          <NavLink to='/about'>
            <h2 className='mode'>About</h2>
          </NavLink>
        </li>
        <li>
          <NavLink to='/projects'>
            <h2 className='mode'>Projects</h2>
          </NavLink>
        </li>
      </ul>
      <div>
        <img onClick={handleDisplay} id="contact-me-link-image" src={ContactMe} alt="my=img" />
        <div id='contact-details' className="contact-details-container">
          <h3 >Phone No. : 7411043895</h3>
          <h3 >E-mail : johnwesley_3@live.com</h3>
          <h3 download > <em>Download Resume</em> </h3>
        </div>
      </div>
    </div>
  )
}

export default Header