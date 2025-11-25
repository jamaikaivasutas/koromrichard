import { useEffect, useState } from "react";
import type { Pizza } from "../types/pizza.ts";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import "../styles/Pizza.css";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";

function AllPizza() {
  const navigate = useNavigate();
  const [pizzas, setPizzas] = useState<Array<Pizza>>([]);

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((response) => setPizzas(response.data))
      .catch((reason) => toast.error(reason));
  }, []);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
        <Container>
          <Navbar.Brand>Pizzák</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/add-pizza">Új Pizza</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {pizzas.map((p) => (
        <Container>
          <Card style={{ width: "18rem" }} id="pizzakartya">
            <Card.Img
              variant="top"
              src={`${BACKEND_URL}/kepek/${p.imageUrl}`}
              width={300}
            />
            <Card.Body>
              <Card.Title>{p.nev}</Card.Title>
              <Card.Subtitle>{p.ar}Ft</Card.Subtitle>
              <Card.Text>{p.leiras}</Card.Text>
              <Button onClick={() => navigate(`/edit-pizza/${p.id}`)}>
                Szerkesztés
              </Button>
              <Button onClick={() => navigate(`/selected/${p.id}`)}>
                Megtekintés
              </Button>
            </Card.Body>
          </Card>
        </Container>
      ))}
    </>
  );
}

export default AllPizza;
