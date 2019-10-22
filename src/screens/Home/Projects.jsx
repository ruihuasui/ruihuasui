import React from 'react'
import { Card } from '../../components'
import { projects } from '../../assets'

export default function Projects({}) {
  return (
    <div className="srh-projs">
      {projects.map( project => (
        <Card key={project.name} {...project} />
      ))}
    </div>
  )
}

function Skills({}) {
  return (
    <div className="srh-skills">

    </div>
  )
}