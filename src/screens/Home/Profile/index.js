import React from 'react'
import './index.css'

import Image from './Image'
import Links from './Links'
import { Card } from '../../../components/Card'

export default function Profile({}) {
  return (
    <div className="srh-profile">
      <Image />
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
          description="Jan 2018 - Dec 2020"
        />
        <Links />
      </div>
    </div>
  )
}