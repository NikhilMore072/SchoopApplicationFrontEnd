import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Header/NavBar'
import Index from './router/Index'

import Login from './componants/LandingPage'
// import SimpleForm from './componants/SimpleForm'



function App() {

 
  return (
    <div>
     <Login/> 
     
      {/* <NavBar /> */}
     {/* <Card/> */}
      <Index />
    </div>
  )
}

export default App
