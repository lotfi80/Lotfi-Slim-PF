import React from 'react'
import styles from './SkillsStyle.module.css'
import SoftSkillsList from '../../common/SoftSkillsList'
import checkMarkIcon from '../../assets/checkMarkDark.png'
import { useTranslation } from 'react-i18next';


function SoftSkills() {
  const { t } = useTranslation();
  return (
    <section id='softSkills'
    className={styles.container}>
        <h1
       className="sectionTitle">Soft Skills</h1>
      
      <div
      className={styles.skillList}>
      <SoftSkillsList src={checkMarkIcon} skill= {t('Communication')}/>
      <SoftSkillsList src={checkMarkIcon} skill={t('Teamwork')}/>
      <SoftSkillsList src={checkMarkIcon} skill={t('Adaptability')}/>
      <SoftSkillsList src={checkMarkIcon} skill={t('Problem-solving')}/>
      <SoftSkillsList src={checkMarkIcon} skill={t(' Time management')}/>
      <SoftSkillsList src={checkMarkIcon} skill={t('Creativity')}/>
      <SoftSkillsList src={checkMarkIcon} skill={t('Decisiveness')}/>

      </div>
    </section>
  )
}

export default SoftSkills