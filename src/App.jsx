import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Home'
import ContactPage from './ContactPage'
// import blackLogo from './assets/black_background.svg'
import './App.css'
import React from 'react'
import { useEffect } from 'react'

function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname])

  return (
    <Routes>
      <Route path='*' element={<Home/>}/>
      {/* <Route path='/contact' element={<ContactPage/>}/> */}
    </Routes>
    
  )
}

export default App
