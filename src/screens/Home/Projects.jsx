import React from 'react'
import { Card } from '../../components'
import { projects } from '../../assets'

export default function Projects({}) {
  return (
    <div className="srh-projs">
      {projects.map( project => (
        <Card {...project} />
      ))}
    </div>
  )
}