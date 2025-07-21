import React, { useState } from 'react'
import EntryScreen from './pages/EntryScreen'
import Homepage from './pages/Homepage'
import './App.css'

function App() {
  const [hasEntered, setHasEntered] = useState(false)

  const handleEnter = () => {
    setHasEntered(true)
  }

  return (
    <div className="App">
      {!hasEntered ? (
        <EntryScreen onEnter={handleEnter} />
      ) : (
        <Homepage />
      )}
    </div>
  )
}

export default App