import { useEffect, useState } from "react";
import type { Pizza } from "../types/pizza";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";

const NewPizza = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    toast.info("cso teso");
    toast.warning("haloo");
    toast.error("halo");
    toast.success("üdv világ");
  }, []);

  const AddPizza = () => {
    const p: Pizza = {
      nev: name,
      leiras: description,
      ar: price,
      imageUrl,
    };
    if (p.ar < 1) {
      alert("Az ar nem lehet kevesebb mint 1 forint!");
    } else {
      apiClient
        .post("/pizzak", p)
        .then((response) => alert(response.status))
        .catch((result) => console.error(result));
    }
  };

  return (
    <>
      <h1>Új pizza</h1>

      <table>
        <tr>
          <td>Név</td>
          <td>
            <input type="text" onChange={(e) => setName(e.target.value)} />
          </td>
        </tr>
        <tr>
          <td>Leírás</td>
          <td>
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>Ár (Ft)</td>
          <td>
            <input
              type="number"
              min={0}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td>Kép (URL)</td>
          <td>
            <input
              type="text"
              min={0}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </td>
        </tr>
      </table>
      <button
        onClick={() => {
          AddPizza;
          toast.success("Pizza sikeresen hozzáadva");
        }}
      >
        Hozzáadás
      </button>
    </>
  );
};

export default NewPizza;
