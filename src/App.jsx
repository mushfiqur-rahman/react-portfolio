import { useState } from 'react'
import Contact from './components/Contact'
import Main from './components/Main'
import Projects from './components/Projects'
import Sidenav from './components/Sidenav'
import Work from './components/Work'
import Resume from './components/Resume'


function App() {

  return (
    <div>
      <Sidenav/>
      <Main/>
      <Work/>
      <Projects/>
      <Resume />
      <Contact/>
    </div>
  )
}

export default App
