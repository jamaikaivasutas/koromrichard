import { useEffect, useState } from "react";
import apiClient, { auth, BACKEND_URL } from "../api/apiClient";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../styles/Pizza.css";
import { Button, Container, Row } from "react-bootstrap";
import type { Order } from "../types/Order";
import type { User } from "../types/User";

const Orders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Array<Order>>([]);

  useEffect(() => {
    if (auth.username != null && auth.password != null) {
      apiClient
        .get("/rendelesek")
        .then((response) => setOrders(response.data))
        .catch(() => toast.error("A rendelések betöltése sikertelen volt"));
    } else {
      toast.error("Ki vagy jelentkezve.");
    }
  }, [auth]);

  if (auth.username != null && auth.password != null) {
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
  } else {
    return (
      <>
        <h1>Ki vagy jelentkezve fütykös</h1>
        <Button onClick={() => navigate("/login")}>Jelenkezz be itt</Button>
      </>
    );
  }
};

export default Orders;
