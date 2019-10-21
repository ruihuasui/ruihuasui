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
  github="",
  githubName=""
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
            <SLink pathname={link} type={name} name={linkName} />
          }
          {
            Boolean(github) && 
            <SLink pathname={github} type="github" name={githubName} />
          }
        </div>
      }
      
      {
        Boolean(role) && 
        <p className="proj-role">{role}</p>
      }
      {
        Boolean(description) && 
        <p dangerouslySetInnerHTML={{ __html: description }}  className="proj-description" />
      }
    </div>
  )
}