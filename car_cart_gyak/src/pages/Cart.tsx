import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import apiClient from "../api/apiClient";
import type { Car } from "../types/Car";
import { toast } from "react-toastify";
import { SlAnchor } from "react-icons/sl";
import { GiCardDiscard } from "react-icons/gi";

const Cart = () => {
  const [cars, setCars] = useState<Array<Car>>([]);
  const [cart, setCart] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("cart") ?? "[]")
  );

  useEffect(() => {
    apiClient
      .get("/autok")
      .then((res) => setCars(res.data))
      .catch(() => toast.error("Autók betöltése sikertelen"));
  });

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
          <th>Márka</th>
          <th>Modell</th>
          <th>Ár</th>
        </thead>
        <tbody>
          {cart.map((value, index) => {
            const car = cars.find((p) => p.id === value);
            return (
              <tr>
                <td>{car?.marka}</td>
                <td>{car?.modell}</td>
                <td>{car?.ar}</td>
                <td>
                  <Button onClick={() => removeItem(index)} variant="danger">
                    <SlAnchor />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Button onClick={() => setCart([])} variant="warning">
        <GiCardDiscard />
      </Button>
    </>
  );
};

export default Cart;
