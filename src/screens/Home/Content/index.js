import React from 'react'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Projects from './Projects'
import { projects, researches } from '../../../assets'

import './index.css'

function Content({

}) {
  return (
    <div className="srh-content">
      {/* <AboutMe /> */}
      <Projects title="Research Experiences" data={researches} />
      <Projects title="Projects" data={projects} />
      <Skills />
    </div>
  )
}

export default Content
