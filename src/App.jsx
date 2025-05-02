import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './Home'
import ColoringBook from './coloring_book/ColoringBook'
import ContactPage from './ContactPage'
import './App.css'
import React, { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/coloring-book' element={<ColoringBook />} />
        {/* <Route path='/contact' element={<ContactPage />} /> */}
      </Routes>
    </HashRouter>
  )
}

export default App
