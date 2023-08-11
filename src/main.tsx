import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { NoteProvider } from "./context/NoteContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <NoteProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </NoteProvider>
);
