import React from 'react'
import { Card } from '../../components'
import { projects, mySkills } from '../../assets'

export default function Projects({}) {
  return (
    <div className="srh-projs">
      <OverView />
    </div>
  )
}

function OverView({}) {
  return (
    <>
      {projects.map( project => (
        <Card key={project.name} {...project} />
      ))}
      <Skills />
    </>
  )
}

function Skills({}) {
  return (
    <div className="srh-skills">
      <h2 className="srh-skills-title">MORE ABOUT ME</h2>
      <div className="skill-list">
        {mySkills.map( skill => (
          <div key={skill.icon} className="skill-listitem">
            <i className="material-icons">{skill.icon}</i>
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