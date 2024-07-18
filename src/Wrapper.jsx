import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
import ChangePassword from "./pages/ChangePassword";
import UploadNote from "./pages/UploadNote";
import { AnimatePresence } from "framer-motion";

const Wrapper = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/change_password" element={<ChangePassword />} />
        <Route path="/upload" element={<UploadNote />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Wrapper;
