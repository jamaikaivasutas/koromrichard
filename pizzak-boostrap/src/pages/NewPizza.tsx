import { useState } from "react";
import type { Pizza } from "../types/pizza";
import apiClient from "../api/apiClient";
import "../styles/index.css";
import { toast } from "react-toastify";

const NewPizza = () => {
  const [pizza, setPizza] = useState<Pizza>({
    nev: "",
    leiras: "",
    ar: 0,
    imageUrl: "",
  });

  const AddPizza = () => {
    const p: Pizza = {
      nev: pizza.nev,
      leiras: pizza.leiras,
      ar: pizza.ar,
      imageUrl: pizza.imageUrl,
    };
    if (p.ar < 1) {
      alert("Az ar nem lehet kevesebb mint 1 forint!");
    } else {
      apiClient
        .post("/pizzak", p)
        .then((response) =>
          toast.success(`Pizza sikeresen hozzáadva (${response.status})`)
        )
        .catch((result) =>
          toast.error(`A pizza hozzáadása sikertelen (${result})`)
        );
    }
  };

  return (
    <>
      <h1>Új pizza</h1>

      <table>
        <tr>
          <td>Név</td>
          <td>
            <input
              type="text"
              onChange={(e) => setPizza({ ...pizza, nev: e.target.value })}
            />
          </td>
        </tr>
        <tr>
          <td>Leírás</td>
          <td>
            <input
              type="text"
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
              min={0}
              onChange={(e) => setPizza({ ...pizza, imageUrl: e.target.value })}
            />
          </td>
        </tr>
      </table>
      <button onClick={AddPizza}>Hozzáadás</button>
    </>
  );
};

export default NewPizza;
