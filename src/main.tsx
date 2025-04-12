import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Function to check if content fits and disable scrolling accordingly
function checkContentFit() {
  const body = document.body;
  const root = document.getElementById("root");
  
  if (root) {
    // If the root element's height is less than or equal to the viewport height,
    // disable scrolling
    if (root.scrollHeight <= window.innerHeight) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  }
}

// Run on load and resize
window.addEventListener("load", checkContentFit);
window.addEventListener("resize", checkContentFit);
