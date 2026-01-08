import { useEffect, useState } from "react";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../styles/Pizza.css";
import { Container, Row } from "react-bootstrap";
import type { Order } from "../types/Order";

const Orders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Array<Order>>([]);
  useEffect(() => {
    apiClient
      .get("/rendelesek")
      .then((response) => setOrders(response.data))
      .catch(() => toast.error("A rendelések betöltése sikertelen volt"));
  }, []);

  return (
    <>
      <Container>
        <Row
          xs={"auto"}
          md={"auto"}
          lg={"auto"}
          xl={"auto"}
          xxl={"auto"}
          className="justify-content-center g-4"
        >
          {orders.map((i) => (
            <h1>
              {" "}
              {i.pizzaId} - {i.mennyiseg}
            </h1>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Orders;
