import "./App.css";
import { useEffect, useState } from "react";
import type { Pizza } from "./types/Pizza";
import apiClient, { BACKEND_URL } from "./api/apiClient";
function App() {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((response) => setPizzas(response.data))
      .catch((reason) => alert(reason));
  }, []);

  return (
    <>
      {pizzas.map((p) => (
        <div>
          <h2>{p.nev}</h2>
          <img src={{ BACKEND_URL } + "/kepek/" + p.imageUrl} width={200} />
        </div>
      ))}
    </>
  );
}

export default App;
