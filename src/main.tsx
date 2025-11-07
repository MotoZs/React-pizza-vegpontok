import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Pizzak from './pages/Pizzak'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import EgyPizza from './pages/EgyPizza'
import UjPizza from './pages/UjPizza'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pizzak/>} />
        <Route path="/pizza/:id" element={<EgyPizza/>} />
        <Route path="/ujpizza" element={<UjPizza/>} />
        <Route path="*" element={<h1>404, Az oldal nem található!</h1>} />
      </Routes>
    </BrowserRouter>
    <ToastContainer theme="colored" />
  </StrictMode>
);
