import { useEffect, useState } from "react";
import type { Pizza } from "../types/pizza";
import apiClient from "../api/apiClient";
import "../styles/index.css";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditPizza = () => {
  const { id } = useParams();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    apiClient
      .get(`/pizzak/${id}`)
      .then((response) => {
        setName(response.data.nev ?? "");
        setDescription(response.data.leiras ?? "");
        setPrice(response.data.ar ?? 0);
        setImageUrl(response.data.imageUrl ?? "");
      })
      .catch((result) => toast.error(result));
  }, [id]);

  const submit = () => {
    const p: Pizza = {
      nev: name,
      leiras: description,
      ar: price,
      imageUrl,
    };

    apiClient
      .put(`/pizzak/${id}`, p)
      .then((response) =>
        toast.success(`Pizza sikeresen szerkesztve (${response.status})`)
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>Leírás</td>
          <td>
            <input
              type="text"
              value={description}
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
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td>Kép (URL)</td>
          <td>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </td>
        </tr>
      </table>
      <button onClick={submit}>Szerkesztés</button>
    </>
  );
};

export default EditPizza;
