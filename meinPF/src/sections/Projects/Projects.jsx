
import React from 'react';
import styles from './ProjectsStyle.module.css';
import ProjectCard from '../../common/ProjectCard';
import beMyEye from '../../assets/beMyEyeLogo.png';
import canvasGame from '../../assets/canvasGame.png';
import hoursTracker from '../../assets/hoursTracker.jpg';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.sectionTitle}>{t('projects')}</h1>
      <div className={styles.projectContainer}>
        <ProjectCard
          src={beMyEye}
          link="https://github.com/lotfi80/BeMyEye-"
          h3='beMyEye'
          p={t('shopApp')}
        />
        <ProjectCard
          src={canvasGame}
          link="https://github.com/lotfi80/Final-project-Game-canvas-OOP"
          h3='canvasGame'
          p={t('canvasGame')}
        />
        <div>
          <ProjectCard
          src={hoursTracker}
          link="https://github.com/lotfi80/hourTracker"
          h3='Hours Tracker'
          p={t('hoursTracker')}
        />
        <div   >
          <h4>link to the page </h4>

        
        <a  href="https://zeiterfassung-v5.onrender.com"><span>click here</span></a>
        </div></div>
        </div>
        
    </section>
  );
}

export default Projects;

