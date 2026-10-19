import React from 'react'

import Hero from './components/Hero'
import Skill from './components/Skill'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import EducationTimeline from './components/Educational'
import InteractiveSandbox from './components/InteractiveSandbox'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Hero/>
      <Skill/>
      <Projects/>
      <EducationTimeline/>
      <InteractiveSandbox/>
      
      {/* Simple Footer */}
      <footer className="py-8 border-t border-slate-900 text-center text-xs font-mono text-slate-500">
        Designed &amp; Built by Md Zaid Alam Ansari · 2026
      </footer>
    </div>
  )
}

export default App