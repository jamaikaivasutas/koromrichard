import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllCar from "./pages/AllCar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import Cart from "./pages/Cart";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllCar />} />
        <Route path="/cart" element={< Cart />}/>
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </StrictMode>
);
