import React, { useState } from 'react'
import { profilePhoto, meCatVideo } from '../../../assets'

export default function Image({
  dark=100
}) {
  const [showVideo, setShowVideo] = useState(true);

  const handleShowImage = () => setShowVideo(false);
  const handleShowVideo = () => setShowVideo(true);

  return (
    <div className="srh-profile-img" style={{ filter: `brightness(${dark}%)`}}>
      {
        showVideo
        ?
        <video 
          playsInline 
          autoPlay 
          muted 
          src={meCatVideo} 
          poster={profilePhoto}
          onEnded={handleShowImage}
        />
        :
        <img 
          src={profilePhoto}
          data-darkness={dark+'%'}
          onMouseEnter={handleShowVideo}
          onTouchStart={handleShowVideo}
        />
      }
    </div>
  )
}