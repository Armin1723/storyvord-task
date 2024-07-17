import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Wrapper from "./Wrapper.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Wrapper />
    </Provider>
  </React.StrictMode>
);
