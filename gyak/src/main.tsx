import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPizza from "./pages/AllPizza.tsx";
import SelectedPizza from "./pages/SelectedPizza.tsx";
import UpdatePizza from "./pages/UpdatePizza.tsx";
import MainPage from "./pages/MainPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/pizzas" element={<AllPizza />} />
      <Route path="/selected/:id" element={<SelectedPizza />} />
      <Route path="/update/:id" element={<UpdatePizza />} />
    </Routes>
  </BrowserRouter>
);
