import React from 'react'
import { profilePhoto } from '../../../assets'

export default function Image({
  dark=100
}) {
  console.error(dark+'%')
  return (
    <div className="srh-profile-img" style={{ filter: `brightness(${dark}%)`}}>
      <img 
        src={profilePhoto}
        data-darkness={dark+'%'}
      />
    </div>
  )
}