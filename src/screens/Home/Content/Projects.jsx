import React from 'react'
import { Card } from '../../../components'

export default function Projects({
  title,
  data
}) {
  return (
    <div className="d-col">
      <h2 className="sec-title">{title}</h2>
      <div className="d-col">
        {data.map( project => (
          <Card key={project.name} projCard {...project} />
        ))}
      </div>
    </div>
  )
}

