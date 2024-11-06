import React from 'react'
import styles from '../sections/Projects/ProjectsStyle.module.css'

function ProjectCard({src, link, h3, p}) {
  return (
      <a href={link} target="_blank">
        <div className={styles.prImgContainer}>
          <img className={styles.hover}
       src={src} 
       alt={`${h3}Logo`}  />
        </div>
      
       <h3>{h3}</h3>
       <p className={styles.projectP} > {p} </p>
      </a>
  )
}

export default ProjectCard