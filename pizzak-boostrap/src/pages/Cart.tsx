import { useEffect, useState } from "react";
import type { Pizza } from "../types/pizza";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import { Button, Table } from "react-bootstrap";
import { WiAlien } from "react-icons/wi";

const Cart = () => {
  const [pizzas, setPizzas] = useState<Array<Pizza>>([]);

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((response) => setPizzas(response.data))
      .catch((reason) => toast.error(reason));
  }, []);

  const [cart, setCart] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("cart") ?? "[]")
  ); // csak ID-kat tárolok

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeItem = (searchedIndex: number) => {
    setCart(cart.filter((_, index) => index !== searchedIndex));
    toast.success("Sikeres törlés");
  };

  return (
    <>
      <Table striped bordered>
        <thead>
          <th>Név</th>
          <th>Ár</th>
          <th>Törlés</th>
        </thead>
        <tbody>
          {cart.map((value, index) => {
            const pizza = pizzas.find((p) => p.id === value);
            return (
              <tr>
                <td>{pizza?.nev}</td>
                <td>{pizza?.ar} Ft</td>
                <td>
                  <Button onClick={() => removeItem(index)} variant="danger">
                    <WiAlien />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Cart;
