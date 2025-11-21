import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewPizza from "./pages/NewPizza.tsx";
import EditPizza from "./pages/EditPizza.tsx";
import { ToastContainer } from "react-toastify";
import AllPizza from "./pages/AllPizza.tsx";
import OnePizza from "./pages/OnePizza.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ToastContainer
      position="top-center"
      theme="dark"
      closeOnClick={false}
      newestOnTop={true}
      hideProgressBar
      limit={5}
    />
    <Routes>
      <Route path="/" element={<AllPizza />} />
      <Route path="/add-pizza" element={<NewPizza />} />
      <Route path="/edit-pizza/:id" element={<EditPizza />} />
      <Route path="/selected/:id" element={<OnePizza />} />
    </Routes>
  </BrowserRouter>
);
