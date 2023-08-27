import React from 'react'
import '../styles/SubProjects.css'
import initiated from "./assets/BubbleSort-Initiated.jpeg"
import sorting from "./assets/BubbleSort-Sorting.jpeg"
import sorted from "./assets/BubbleSort-Sorted.jpeg"

function ProjectTwo() {
  return (
    <div className='sub-projects' >
      <h1 className='mode' >
        Some Heading : <i>Lorem ipsum dolor sit amet.</i>
      </h1>
      <br />

      <p className='paragraph mode'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, repudiandae quisquam illo dolore, culpa eum perferendis dignissimos velit reiciendis obcaecati atque magnam quaerat placeat maxime unde sint blanditiis! Perspiciatis, veniam? Incidunt, minus architecto enim fugit nihil molestias illum consectetur tenetur recusandae repudiandae aspernatur beatae magni ipsum ut, similique, corrupti consequatur?
      </p>
      <br />

      <img className='project-image bubble-sort landscape' src={initiated} alt="#" />
      <p className='mode figure-title'>figure : Bubble Sort (Initiated)</p><br />
      <p className='paragraph mode'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, repudiandae quisquam illo dolore, culpa eum perferendis dignissimos velit reiciendis obcaecati atque magnam quaerat placeat maxime unde sint blanditiis! Perspiciatis, veniam? Incidunt, minus architecto enim fugit nihil molestias illum consectetur tenetur recusandae repudiandae aspernatur beatae magni ipsum ut, similique, corrupti consequatur?
      </p>
      <br />
      <img className='project-image bubble-sort landscape' src={sorting} alt="#" />
      <p className='mode figure-title'>figure : Bubble Sort (Sorting)</p><br />
      <p className='paragraph mode'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, repudiandae quisquam illo dolore, culpa eum perferendis dignissimos velit reiciendis obcaecati atque magnam quaerat placeat maxime unde sint blanditiis! Perspiciatis, veniam? Incidunt, minus architecto enim fugit nihil molestias illum consectetur tenetur recusandae repudiandae aspernatur beatae magni ipsum ut, similique, corrupti consequatur?
      </p>
      <br />

      <img className='project-image bubble-sort landscape' src={sorted} alt="#" />
      <p className='mode figure-title'>figure : Bubble Sort (Sorted)</p><br />
      <p className='paragraph mode'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, repudiandae quisquam illo dolore, culpa eum perferendis dignissimos velit reiciendis obcaecati atque magnam quaerat placeat maxime unde sint blanditiis! Perspiciatis, veniam? Incidunt, minus architecto enim fugit nihil molestias illum consectetur tenetur recusandae repudiandae aspernatur beatae magni ipsum ut, similique, corrupti consequatur?
      </p>
      <br />

    </div>
  )
}

export default ProjectTwo