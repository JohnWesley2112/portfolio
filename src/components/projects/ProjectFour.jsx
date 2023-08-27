import React from 'react'
// import HandOff from './assets/handoff.jpeg'
import CommingSoon from './assets/comming-soon2.png'

function ProjectFour() {
  return (
    <div className='sub-projects comming-soon-container'>
      <img className='project-image comming-soon-image' style={{
        aspectRatio: "6/5",
        width: "55%",
        border: "none",
        mixBlendMode: "normal"
      }} src={CommingSoon} alt="" />
      <div className="-soon">
        <h3 className='mode' >Comming Soon</h3>
      </div>
    </div>
  )
}

export default ProjectFour