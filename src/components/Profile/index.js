import React from 'react'
import './index.css'

import Image from './Image'
import { Card } from '../Card'

export function Profile({}) {
  return (
    <div className="srh-profile">
      <Image />
      <Card 
        name="uni"
        title="University of Illinois at Urbana-Champaign"
        role="Senior student in Mathematics & Computer Science"
        description="Jan 2018 - May 2020"
      />
    </div>
  )
}