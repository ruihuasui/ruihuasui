import React from 'react'
import { Link } from 'react-router-dom'
// import Microlink from '@microlink/react'
import { Popup } from 'semantic-ui-react'
import { logo } from '../../assets'
import './index.css'

export function SLink({
  within=false,
  pathname=window.location.pathname,
  name="",
  type="",
  img=null,
  icon=null,
}) {

  const className = `srh-link srh-link-${type}`

  const imgSrc = img || logo['github']

  if (Boolean(icon)) {
    return (
      <Popup inverted hoverable
        content={<div dangerouslySetInnerHTML={{__html: name}}></div>}
        openOnTriggerFocus
        closeOnTriggerBlur
        //mouseEnterDelay={500}
        trigger={
          <a className={className} href={pathname}>
            {icon} {/*{name === 'Resume' && name}*/}
          </a>
        }
      />
    )
  }

  return (
    <Popup wide inverted
      openOnTriggerFocus
      closeOnTriggerBlur
      //mouseEnterDelay={500}
      trigger={
        within ?
          <Link className={className} to={pathname}>{name}</Link>
        :
          <a className={className} href={pathname}>
            {Boolean(imgSrc) && <img className="srh-link-img" src={imgSrc} />}
          </a>
      }
      content={name}
    />
  )
}

