import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";
import { ContextProvider } from "./context/Context";
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);

// reportWebVitals();
