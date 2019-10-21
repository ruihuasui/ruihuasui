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
  github=""
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
            (Boolean(github) || Boolean(link)) &&
            <>&ensp;<i className="material-icons">arrow_right_alt</i></>
          }
          {
            Boolean(link) && 
            <SLink pathname={link} type={name} />
          }
          {
            Boolean(github) && 
            <SLink pathname={github} type="github" />
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