import React from 'react'
import './index.css'

import Image from './Image'
import { Card } from '../Card'

export function Profile({}) {
  return (
    <div className="srh-profile">
      <Image />
      <h1 className="srh-name">RUIHUA SUI</h1>
      <Card 
        name="uni"
        //title=""
        role={<>Senior student in Mathematics & Computer Science <br/> @ University of Illinois at Urbana-Champaign</>}
        description="Jan 2018 - May 2020"
      />
    </div>
  )
}