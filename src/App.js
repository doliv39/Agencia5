import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Cliente from './views/Cliente'
import ClienteCreate from './views/Cliente/Create'
import Destino from './views/destinos'
import Home from './views/home'
import Promo from './views/promo'
import DestinoCreate from './views/destinos/Create'
import PromoCreate from './views/promo/Create'

import Footer from './views/shared/components/footer/Footer'
import NavBar from './views/shared/components/nav/NavBar'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cliente" element={<Cliente />} />
        <Route path="/Cliente-Create" element={<ClienteCreate />} />
        <Route path="/Cliente-Update/:id" element={<ClienteCreate />} />
        <Route path="/Destino" element={<Destino />} />
        <Route path="/Destino-Create" element={<DestinoCreate />} />
        <Route path="/Destino-Update/:id" element={<DestinoCreate />} />
        <Route path="/Promo" element={<Promo />} />
        <Route path="/Promo-Create" element={<PromoCreate />} />
        <Route path="/Promo-Update/:id" element={<PromoCreate />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
