import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Servicios from './pages/Servicios'
import Soon from './pages/Soon'
import Contacto from './pages/Contacto'
import NavBarMenu from './Components/NavBarMenu'
import Footer from './components/footer'
import './App.css'

function App() {

  return (
    <HashRouter>
      <NavBarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/proximamente" element={<Soon />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
