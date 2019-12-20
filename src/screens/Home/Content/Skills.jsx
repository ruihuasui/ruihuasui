import React from 'react'
import { mySkills } from '../../../assets'

function Skills({}) {
  return (
    <div className="srh-skills">
      <h2 className="sec-title">SKILLS</h2>
      <div className="skill-list">
        {mySkills.map( skill => (
          <div key={skill.icon} className="skill-listitem">
            <i className="material-icons" aria-hidden="true">{skill.icon}</i>
            <div className="skill-info" type={skill.icon}>
              <span className="skill-name">{skill.name}</span>
              <span className="skill-content">{skill.content}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills