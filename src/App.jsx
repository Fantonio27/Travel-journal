import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  
  return (
    <div className='container'>
      <div className='container-components'>
        <Navbar />
        <Main />
      </div>
    </div>
  )
}

export default App
