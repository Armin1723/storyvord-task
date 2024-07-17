import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
