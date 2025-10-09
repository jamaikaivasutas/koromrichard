import "./App.css";
import { useState, useEffect } from "react";
import type { Pizza } from "./types/Pizza";
import apiClient, { BACKEND_URL } from "./api/apiClient";

function App() {
  const [pizzas, setPizzas] = useState<Array<Pizza>>([]);

  useEffect(() => {
    apiClient
      .get("pizzak")
      .then((response) => setPizzas(response.data))
      .catch((reason) => alert(reason));
  }, []);

  return (
    <>
    {pizzas.map((p) => (
      <p>
        <div id="nev">{p.nev}</div>
        <img src={`${BACKEND_URL}/kepek/${p.imageUrl}`} width={300}/>
      </p>
    ))}
    </>
  )
}

export default App;
