import React from 'react'
import "../styles/Projects.css"
import { NavLink, Outlet } from 'react-router-dom'



function Projects() {
  return (
    <div className='projects-main-container' >

      <div className="display-container">
        <Outlet />
      </div>

      <div className="navigation-container">
        <br />
        <NavLink to="projectone"><h3 className='mode' >
          Project One</h3 ></NavLink><br/>

        <NavLink to="projecttwo"><h3 className='mode'>
          Project Two</h3 ></NavLink><br/>

        <NavLink to="projectthree"><h3 className='mode'>
          Project Three</h3 ></NavLink><br/>

        <NavLink to="projectfour"><h3 className='mode'>
          Project Four</h3 ></NavLink><br/>

        <NavLink to="projectfive"><h3 className='mode'>
          Project Five</h3 ></NavLink><br/>
      </div>

    </div>
  )
}

export default Projects