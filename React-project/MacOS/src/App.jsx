import React, { useState } from "react"
import "./App.scss"
import Dock from './Components/Dock'
import Navbar from './Components/Navbar'
import Github from './Components/Windows/Github'
import Notes from './Components/Windows/Notes'
import Resume from './Components/Resume'
import Spotify from './Components/Windows/Spotify'
import Cli from './Components/Windows/Cli'

const App = () => {
  const [windowsState, setWindowsState] = useState({
    github: false,
    notes: false,
    resume: false,
    spotify: false,
    cli: false,
  })
  return (
    <div>
      <main>
        <Navbar />
        <Dock
          windowsState={windowsState}
          setWindowsState={setWindowsState}
        />
        {windowsState.github && <Github />}
        {windowsState.notes && <Notes />}
        {windowsState.resume && <Resume />}
        {windowsState.spotify && <Spotify />}
        {windowsState.cli && <Cli />}
      </main>
    </div>
  )
}

export default App
