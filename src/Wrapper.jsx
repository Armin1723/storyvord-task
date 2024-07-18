import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Admin from './pages/Admin'
import ChangePassword from './pages/ChangePassword'
import UploadNote from './pages/UploadNote'

const Wrapper = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/change_password' element={<ChangePassword />} />
          <Route path='/upload' element={<UploadNote />} />
        </Routes>
      </BrowserRouter>
  )
}

export default Wrapper
