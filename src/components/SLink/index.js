import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export function SLink({
  within=false,
  pathname=window.location.pathname,
  name="",
  margin="",
  type="",
}) {

  var className = `srh-link srh-link-${type}`

  return within ? (
    <Link className={className} to={pathname}>{name}</Link>
  ) : (
    <a target="_blank" className={className} href={pathname}>{name}</a>
  )
}