import { useEffect, useState } from "react";
import type { Pizza } from "../types/pizza.ts";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import "../styles/Pizza.css";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";

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
          <Link to={`/edit-pizza/${p.id}`}>
            <h3>
              <button>Szerkesztés</button>
            </h3>
          </Link>
          <h3>{p.ar}Ft</h3>
        </p>
      ))}
    </>
  );
}

export default AllPizza;
