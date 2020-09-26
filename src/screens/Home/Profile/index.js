import React, { useEffect, useState } from 'react'
import './index.css'

import Image from './Image'
import Links from './Links'
import { Card } from '../../../components/Card'

export default function Profile({}) {
  const [dark, setDark] = useState(100)
  
  useEffect(() => {
    document.addEventListener('scroll', e => {
      if (window.innerWidth <= 900 && window.scrollY * 0.4 <= 100) {
        let d = parseInt(100 - window.scrollY * 0.4)
        setDark(d < 20 ? 0 : d)
      } else if (window.innerWidth > 900) {
        setDark(100);
      }
    })
  }, [])

  return (
    <div className="srh-profile">
      <Image dark={dark} />
      <div className="profile-info">
        <h1 className="srh-name">R<span>UIHUA</span> S<span>UI</span></h1>
        <p className="srh-aboutme">
          Full-time programmer, part-time web design lover, <br/>cant-find-time video editing amateur
        </p>
        <Card 
          name="uni"
          //title=""
          role={
            <>
              Senior student in Mathematics & Computer Science <br/> 
              @ <span className="uofi">University of Illinois at Urbana-Champaign</span>
            </>
          }
          description='Jan 2018 - Dec 2020<br/>ruihua [dot] sui [at] gmail [dot] com'
        />
        <Links />
      </div>
    </div>
  )
}