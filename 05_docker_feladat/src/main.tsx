import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SelectedPizza from "./pages/selectedPizza.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/pizzak" element={<App />} />
      <Route path="/pizzak/:id" element={<SelectedPizza />} />
    </Routes>
  </BrowserRouter>
);
