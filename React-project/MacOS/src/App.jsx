import React from 'react'
import "./App.scss"
import Dock from './Components/Dock'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>
      <main>
        <Navbar/>
        <Dock/>
      </main>
    </div>
  )
}

export default App
