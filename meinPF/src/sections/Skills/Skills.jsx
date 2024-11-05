import React from 'react'
import styles from './SkillsStyle.module.css'
import checkMarkIcon from '../../assets/checkMarkDark.png'
import SkillList from '../../common/SkillList'


function Skills() {
  return (
    <section id='skills'
    className={styles.container}>
      <h1
       className="sectionTitle">Hard Skills</h1>
      <div
      className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill="HTML" />
           <SkillList src={checkMarkIcon} skill="CSS" />

           <SkillList src={checkMarkIcon} skill="JavaScript" />

           <SkillList src={checkMarkIcon} skill="TypeScript" />

           <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
           <SkillList src={checkMarkIcon} skill="Sass/SCSS " />


      </div>
      <hr />
      <div
      className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill="ReactJS" />
           <SkillList src={checkMarkIcon} skill="React Router
" />

           <SkillList src={checkMarkIcon} skill="Responsive Design" />

          


      </div>
      <hr />
      <div
      className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill="Node.js
" />
           <SkillList src={checkMarkIcon} skill="ExpressJS" />

           <SkillList src={checkMarkIcon} skill="MangoDB" />

           <SkillList src={checkMarkIcon} skill="Mongoose" />

           <SkillList src={checkMarkIcon} skill="Git" />


      </div>

    </section>
  )
}

export default Skills