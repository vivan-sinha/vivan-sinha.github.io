import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Home'
import ColoringBook from './coloring_book/ColoringBook'
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
  console.log('updated')

  return (
    <Routes>
      <Route path='*' element={<Home/>}/>
      {/* <Route path='/contact' element={<ContactPage/>}/> */}
      <Route path='/coloring-book' element={<ColoringBook></ColoringBook>}></Route>
    </Routes>
    
  )
}

export default App
