import React, { useState } from 'react'
import './index.css'

import { SLink } from '../SLink'

export function Card({ 
  name="",

  title="", 
  description="", 
  role="",
  time="",
  img=null,

  list=[],
  links=[],
  projCard=false,
}) {
  
  const [showDetails, setShowDetails] = useState(!projCard)
  
  const handleShowDetails = () => {
    setShowDetails( !showDetails )
  }

  return (
    <div className={`srh-proj-card srh-card-${name}`}>
      {
        Boolean(title) 
        && 
        <div className="proj-header">
          <h2 className="proj-title">
            {title}
          </h2>
          <div className="proj-header-links">
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
        </div>
      }
      
      {
        Boolean(role) 
        && 
        <div className="proj-role-time">
          <p className="proj-role">{role}</p>
          <p className="proj-time">{time}</p>
        </div>
      }


      {
        Boolean(description) 
        && 
        <div className="proj-outline">
          <div className="proj-outline-text">
            <p dangerouslySetInnerHTML={{ __html: description }}  className="proj-description" /> 
          </div>
          {
            img 
            &&
            <div aria-hidden="true" className="proj-outline-img">
              <img className="w-100 proj-img" data-name={name} src={img} />
            </div>
          }
        </div>
      }
      
      <ul id="contri-list" data-show={showDetails.toString()}>
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

      {
        !showDetails
        &&
        <div className="d-col">
          <button className="show-detail-btn" onClick={handleShowDetails}>
            <span className="show-detail-btn-content">
              <span className="show-detail-btn-text" tabIndex="-1">
                Show Details
              </span>
              <span>
                <i className="material-icons">arrow_drop_down</i>
              </span>
            </span>
          </button>
        </div>
      }
    </div>
  )
}