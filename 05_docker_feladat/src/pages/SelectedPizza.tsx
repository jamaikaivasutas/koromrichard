import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Pizza } from "../types/Pizza";
import apiClient, { BACKEND_URL } from "../api/apiClient";

const SelectedPizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState<Pizza>();

  useEffect(() => {
    if (!id) return;
    apiClient
      .get(`pizzak/${id}`)
      .then((response) => setPizza(response.data))
      .catch((reason) => alert(reason));
  }, [id]);

  return (
    <>
      <h2 id="nev">{pizza?.nev}</h2>
      <img src={`${BACKEND_URL}/kepek/${pizza?.imageUrl}`} width={300} />
    </>
  );
};

export default SelectedPizza;
