import React from 'react'
import './index.css'

import { SLink } from '../SLink'

export function Card({ 
  name="",

  title="", 
  description="", 
  role="",
  time="",

  list=[],
  links=[]
}) {
  return (
    <div className={`srh-proj-card srh-card-${name}`}>
      {
        Boolean(title) 
        && 
        <div className="proj-header">
          <h2 className="proj-title">
            {title}
          </h2>
          {
            links.length > 0 
            &&
            <>&ensp;<i className="material-icons">arrow_right_alt</i></>
          }
          {
            links.map( item => (
              <SLink pathname={item.link} type="logo" img={item.img} name={item.name} />
            ))
          }
        </div>
      }
      
      {
        Boolean(role) && 
        <div className="proj-role-time">
          <p className="proj-role">{role}</p>
          <p className="proj-time">{time}</p>
        </div>
      }
      {
        Boolean(description) && 
        <p dangerouslySetInnerHTML={{ __html: description }}  className="proj-description" />
      }
      
      <ul id="contri-list">
        {
          list.map( item => (
            <li className="contri-listitem">
              <div className="list-dot" aria-hidden="true">
                <span>{'</>'}</span>
              </div>
              <p className="contri-listitem-text" dangerouslySetInnerHTML={{__html: item}}></p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}