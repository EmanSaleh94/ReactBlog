import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./Pages/App/App.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <App />
    </div>
  </React.StrictMode>
);
