import { useEffect, useState } from "react";
import type { Pizza } from "../types/pizza";
import apiClient from "../api/apiClient";
import "../styles/index.css";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditPizza = () => {
  const { id } = useParams();

  const [pizza, setPizza] = useState<Pizza>({
    nev: "",
    leiras: "",
    ar: 0,
    imageUrl: "",
  });

  useEffect(() => {
    apiClient
      .get(`/pizzak/${id}`)
      .then((res) => setPizza(res.data))
      .catch(() => toast.error("A pizzák betöltése sikertelen volt"));
  }, [id]);

  const submit = () => {
    const p: Pizza = {
      nev: pizza.nev,
      leiras: pizza.leiras,
      ar: pizza.ar,
      imageUrl: pizza.imageUrl,
    };

    apiClient
      .put(`/pizzak/${id}`, p)
      .then((response) =>
        toast.success(`Pizza sikeresen szerkesztve (${response.status})`),
      )
      .catch((result) => toast.error(result));
  };

  return (
    <>
      <h1>Pizza szerkesztése</h1>

      <table>
        <tr>
          <td>Név</td>
          <td>
            <input
              type="text"
              value={pizza.nev}
              onChange={(e) => setPizza({ ...pizza, nev: e.target.value })}
            />
          </td>
        </tr>
        <tr>
          <td>Leírás</td>
          <td>
            <input
              type="text"
              value={pizza.leiras}
              onChange={(e) => setPizza({ ...pizza, leiras: e.target.value })}
            />
          </td>
        </tr>
        <tr>
          <td>Ár (Ft)</td>
          <td>
            <input
              type="number"
              min={0}
              value={pizza.ar}
              onChange={(e) =>
                setPizza({ ...pizza, ar: Number(e.target.value) })
              }
            />
          </td>
        </tr>
        <tr>
          <td>Kép (URL)</td>
          <td>
            <input
              type="text"
              value={pizza.imageUrl}
              onChange={(e) => setPizza({ ...pizza, imageUrl: e.target.value })}
            />
          </td>
        </tr>
      </table>
      <button onClick={submit}>Szerkesztés</button>
    </>
  );
};

export default EditPizza;
