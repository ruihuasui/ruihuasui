import React from 'react'
import { Profile } from '../../components'
import Projects from './Projects'
import './index.css'

export function Home({}) {
  return (
    <main className="srh-home">
      <Profile />
      <Projects />
    </main>
  )
} 