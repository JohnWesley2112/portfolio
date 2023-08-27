import React from 'react'
import '../styles/SubProjects.css'
import CommingSoon from './assets/comming-soon2.png'

function ProjectFive() {
  return (
    <div className='sub-projects comming-soon-container'>
      <img className='project-image comming-soon-image' src={CommingSoon} alt="" />
      <div className="-soon">
        <h3 className='mode' >Comming Soon</h3>
      </div>
    </div>
  )
}

export default ProjectFive