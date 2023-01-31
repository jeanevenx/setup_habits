import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Habit } from './components/Habit'

function App() {

  return (
    <Habit completed={3}/>
  )
}

export default App
