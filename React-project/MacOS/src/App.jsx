import React from 'react'
import "./App.scss"
import Dock from './Components/Dock'
import Navbar from './Components/Navbar'
import MacWindow from './Components/Windows/MacWindow'
import Github from './Components/Windows/Github'
import Notes from './Components/Windows/Notes'
import Resume from './Components/Resume'

const App = () => {
  return (
    <div>
      <main>
        <Navbar />
        <Dock />
        <Github/>
        <Notes/>
        <Resume/>
      </main>
    </div>
  )
}

export default App
