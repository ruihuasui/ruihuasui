import React from 'react'
import Profile from './Profile'
import Content from './Content'
import './index.css'

export function Home({}) {
  return (
    <main className="srh-home">
      <Profile />
      <Content />
    </main>
  )
} 