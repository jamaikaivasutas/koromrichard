import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient from "../api/apiClient";

function App() {
  const [pizzas, setPizzas] = useState<Array<Pizza>>([]);

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((res) => setPizzas(res.data))
      .catch(() => console.log("Pizzák betöltése sikertelen!"));
  });

  return (
    <>
      <div>
        {pizzas.map((i) => (
          <h1 key={i.id}>{i.nev}</h1>
        ))}
      </div>
    </>
  );
}

export default App;
