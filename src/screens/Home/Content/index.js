import React from 'react'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Projects from './Projects'

import './index.css'

function Content({

}) {
  return (
    <div className="srh-content">
      {/* <AboutMe /> */}
      <Skills />
      <Projects />
    </div>
  )
}

export default Content
