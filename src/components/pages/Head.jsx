import React from 'react'
import MyLogo from "../../assets/JW-svg-logo.svg";
import ContactMe from "../../assets/contactMeLogo.png";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className='header-main-container' >
      <div>
        <NavLink to="/" >
          <img id="page-logo" src={MyLogo} alt="my=img" />
        </NavLink>
      </div>
header
      <div>
        <NavLink to="/contact" >
          <img id="contact-me-link-image" src={ContactMe} alt="my=img" />
        </NavLink>
      </div>
    </div>

  )
}

export default Header







// import React from "react";

// function Header() {

//   return (
//     <div id="nav-container">
//       <div className="navbar-links">
//         <h2 className="active link">Contact Me</h2>
//       </div>
//       <hr />
//     </div>
//   );
// }

// export default Header;
