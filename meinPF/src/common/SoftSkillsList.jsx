import React from 'react'

function SoftSkillsList({src,skill}) {
  return (
   <span>
    <img src={src} alt="icon" />
    <p>{skill}</p>
   </span>
  )
}

export default SoftSkillsList