import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";
// import "./index.css";        // Tailwind import한 CSS
import "./output.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);