import React from 'react'
import "./App.scss"
import Dock from './Components/Dock'
import Navbar from './Components/Navbar'
import MacWindow from './Components/Windows/MacWindow'
import Github from './Components/Windows/Github'

const App = () => {
  return (
    <div>
      <main>
        <Navbar />
        <Dock />
        <Github/>
      </main>
    </div>
  )
}

export default App
