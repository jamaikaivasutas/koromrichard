import { useEffect, useState } from "react";
import type { Pizza } from "../types/pizza.ts";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import "../styles/style.css";

function AllPizza() {
  const [pizzas, setPizzas] = useState<Array<Pizza>>([]);

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((response) => setPizzas(response.data))
      .catch((reason) => alert(reason));
  }, []);

  return (
    <>
      {pizzas.map((p) => (
        <p>
          {p.nev}
          <img src={`${BACKEND_URL}/kepek/${p.imageUrl}`} width={300} />
        </p>
      ))}
    </>
  );
}

export default AllPizza;
