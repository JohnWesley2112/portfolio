import React from 'react'
import "../styles/Header.css"
import MyLogo from "../../assets/JW-svg-logo.svg";
import ContactMe from "../../assets/contactMeLogo.png";


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
        <img id="page-logo" src={MyLogo} alt="my=img" />
      </div>
      <ul className='ul-navigation'>
        <li><h2>About</h2></li>
        <li><h2>Projects</h2></li>
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