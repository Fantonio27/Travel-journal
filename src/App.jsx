import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import data from "./data"

function App() {
  const info = data.map(information=>{
    return ( <Hero key={information.id} item = {information} />)
  }) 

  return (
    <div className='container'>
      <div className='container-components'>
        <Navbar />
        {info}
        </div>
    </div>
  )
}

export default App
