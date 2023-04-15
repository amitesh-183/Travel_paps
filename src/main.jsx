import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import CareerScreen from "./screens/CareerScreen";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
