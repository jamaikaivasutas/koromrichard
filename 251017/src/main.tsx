import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewPizza from "./pages/NewPizza.tsx";
import EditPizza from "./pages/EditPizza.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/add-pizza" element={<NewPizza />} />
      <Route path="/edit-pizza/:id" element={<EditPizza />} />
    </Routes>
  </BrowserRouter>
);
