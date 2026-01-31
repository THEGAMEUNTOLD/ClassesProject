import React from 'react'
import "./App.scss"
import Dock from './Components/Dock'
import Navbar from './Components/Navbar'
import MacWindow from './Components/Windows/MacWindow'

const App = () => {
  return (
    <div>
      <main>
        <Navbar />
        <Dock />
        <MacWindow><p>Hello from App.jsx!</p></MacWindow>
      </main>
    </div>
  )
}

export default App
