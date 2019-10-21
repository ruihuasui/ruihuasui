import React from 'react'
import './index.css'

import { SLink } from '../SLink'

export function Card({ 
  name="",

  title="", 
  description="", 
  role="",
  img,

  link="",
  linkName="",
}) {
  return (
    <div className={`srh-proj-card srh-card-${name}`}>
      {
        Boolean(title) && 
        <div className="proj-header">
          <h2 className="proj-title">
            {title}
          </h2>
          {
            Boolean(link) && 
            <SLink pathname={link} name={linkName} type={name} />
          }
        </div>
      }
      
      {
        Boolean(role) && 
        <p className="proj-role">{role}</p>
      }
      {
        Boolean(description) && 
        <p className="proj-description">{description}</p>
      }
    </div>
  )
}