import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./bootstrap.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./components/Provider/StateProvider.jsx";
import reducer, { initialState } from "./reducer.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>
);
