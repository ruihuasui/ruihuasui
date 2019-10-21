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
}) {

  const className = `srh-link srh-link-${type}`

  const imgSrc = logo[type]

  return (
    <Popup hoverable wide flowing
      trigger={
        within ?
          <Link className={className} to={pathname}>{name}</Link>
        :
          <a target="_blank" className={className} href={pathname}>
            {Boolean(imgSrc) && <img className="srh-link-img" src={imgSrc} />}
            {name}
          </a>
      }
      content={
        <Microlink url={pathname}  />
      }
    />
  )
}

