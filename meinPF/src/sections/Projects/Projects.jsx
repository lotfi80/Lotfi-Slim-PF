import React from 'react'
import styles from './ProjectsStyle.module.css'
import ProjectCard from '../../common/ProjectCard'
import beMyEye from '../../assets/beMyEyeLogo.png'
import canvasGame from '../../assets/canvasGame.png'
import hoursTracker from '../../assets/hoursTracker.jpg'

function Projects() {
  return (
    <section id='projects'
    className={styles.container}
    >
      <h1
      className='sectionTitle'>Projects</h1>
      <div className={styles.projectContainer} >
      <ProjectCard src={beMyEye} link='https://github.com/lotfi80/BeMyEye-'
      h3="BeMyEye"
      p= "Shop App"
      />
       <ProjectCard src={canvasGame} link='https://github.com/lotfi80/Final-project-Game-canvas-OOP'
      h3="Canvas Game"
      p= "Canvas Game"
      />
      <ProjectCard src={hoursTracker} link='https://github.com/lotfi80/hourTracker'
      h3="HoursTracker"
      p= "Best App to tracke your working hours"
      />
      </div>
    </section>
  )
}

export default Projects