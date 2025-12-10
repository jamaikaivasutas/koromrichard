import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Pizza } from "../types/pizza";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";

const OnePizza = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = useState<Pizza>();

  useEffect(() => {
    apiClient
      .get(`/pizzak/${id}`)
      .then((res) => setPizza(res.data))
      .catch(() => toast.success("Pizzák betöltése sikertelen!"));
  }, [id]);

  const deletePizza = () => {
    apiClient
      .delete(`/pizzak/${id}`)
      .then(() => {
        toast.success("Pizza sikeresen törölve");
        navigate("/");
      })
      .catch(() => toast.error("Pizza törlése sikertelen"));
  };

  return (
    <>
      <img src={`${BACKEND_URL}/kepek/${pizza?.imageUrl}`} width={300} />
      <h2>{pizza?.nev}</h2>
      <h2>{pizza?.leiras}</h2>
      <h2>{pizza?.ar}Ft</h2>
      <Button onClick={deletePizza} variant="outline-danger">
        Törlés
      </Button>
    </>
  );
};

export default OnePizza;
