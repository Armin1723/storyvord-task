import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import Signup from './pages/Signup'

const Wrapper = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
  )
}

export default Wrapper
