import React from 'react'
import HomeButton from "../../assets/homeButton.png";
import { NavLink } from "react-router-dom";
import "../styles/Contacts.css"
function Contacts() {
  return (
    <div className='contacts-main-container' >
      <div className="background-container"></div>
      <div className="contact-container">
        <h3>Mobile No. : 7411043895</h3>
        <h3>E-mail : johnwesley_3@live.com</h3>
        <h3>LinkedIn : www.linkedin.com/in/john-wesley21</h3>
      </div>

      <div className="next-button-container">
        <NavLink to='/' >
          <img id='next-button-image' src={HomeButton} alt="Next" />
        </NavLink>
      </div>


    </div>
  )
}

export default Contacts