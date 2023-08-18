import React from 'react'
import HomeButton from "../../assets/homeButton.png";
import { NavLink } from "react-router-dom";



function Projects() {
  return (
    <div className='projects-main-container' >
      Projects
      <div className="next-button-container">
      <NavLink to='/' >
          <img id='next-button-image' src={HomeButton} alt="Next" />
        </NavLink>
      </div>
    </div>
  )
}

export default Projects