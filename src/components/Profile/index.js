import React from 'react'
import './index.css'

import Image from './Image'
import Links from './Links'
import { Card } from '../Card'

export function Profile({}) {
  return (
    <div className="srh-profile">
      <Image />
      <h1 className="srh-name">R<span>UIHUA</span> S<span>UI</span></h1>
      <p className="srh-aboutme">
        Full-time programmer, part-time web design lover, <br/>cant-find-time video editing amateur
      </p>
      <Card 
        name="uni"
        //title=""
        role={<>Senior student in Mathematics & Computer Science <br/> @ University of Illinois at Urbana-Champaign</>}
        description="Jan 2018 - May 2020"
      />
      <Links />
    </div>
  )
}