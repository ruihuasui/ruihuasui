import React from 'react'
import { Card } from '../../../components'
import { projects } from '../../../assets'

export default function Projects({}) {
  return (
    <div className="d-col">
      <h2 className="sec-title">PROJECTS</h2>
      <div className="d-col">
        {projects.map( project => (
          <Card key={project.name} projCard {...project} />
        ))}
      </div>
    </div>
  )
}

