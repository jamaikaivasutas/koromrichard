import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import OneCar from "./pages/OneCar";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/auto/:id" element={<OneCar />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </StrictMode>
);
