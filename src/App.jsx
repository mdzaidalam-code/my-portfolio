import React from 'react'

import Hero from './components/Hero'
import Skill from './components/Skill'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import EducationTimeline from './components/Educational'

const App = () => {
  return (
    <div>
      <Hero/>
      <Skill/>
      <Projects/>
      <EducationTimeline/>
    </div>
  )
}

export default App