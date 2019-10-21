import React from 'react'
import { Link } from 'react-router-dom'
import Microlink from '@microlink/react'
import { Popup } from 'semantic-ui-react'
import { logo } from '../../assets'
import './index.css'

export function SLink({
  within=false,
  pathname=window.location.pathname,
  name="",
  type="",
  icon=null,
}) {

  const className = `srh-link srh-link-${type}`

  const imgSrc = logo[type]

  if (Boolean(icon)) {
    return (
      <Popup inverted
        content={name}
        mouseEnterDelay={500}
        trigger={
          <a target="_blank" className={className} href={pathname}>
            {icon}
          </a>
        }
      />
    )
  }

  return (
    <Popup wide inverted
      mouseEnterDelay={500}
      trigger={
        within ?
          <Link className={className} to={pathname}>{name}</Link>
        :
          <a target="_blank" className={className} href={pathname}>
            {Boolean(imgSrc) && <img className="srh-link-img" src={imgSrc} />}
          </a>
      }
      content={name}
    />
  )
}

