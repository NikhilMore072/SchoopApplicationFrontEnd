import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Header/NavBar'
import Index from './router/Index'

function App() {


  return (
    <div>
      <NavBar />

      <Index />
    </div>
  )
}

export default App
