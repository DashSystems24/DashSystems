import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBarMenu from './Components/NavBarMenu'
import Footer from './components/footer'
import './App.css'

function App() {

  return (
    <HashRouter>
      <NavBarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
