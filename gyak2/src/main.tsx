import { createRoot } from "react-dom/client";
import "./styles/index.css";
import AllPizza from "./pages/AllPizza.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AllPizza />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
