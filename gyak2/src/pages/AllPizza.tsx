import { useState, useEffect } from "react";
import "../styles/App.css";
import type { Pizza } from "../types/Pizza";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { toast } from "react-toastify";

function AllPizza() {
  const [pizzas, setPizzas] = useState<Array<Pizza>>([]);

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((response) => setPizzas(response.data))
      .catch((reason) => toast.error(reason));
  }, []);
  return (
    <>
      {pizzas.map((p) => (
        <p>
          <h2>{p.nev}</h2>
          <img src={`${BACKEND_URL}/kepek/${p.imageUrl}`} width={300} />
        </p>
      ))}
    </>
  );
}

export default AllPizza;
