import { useEffect, useState } from "react";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import type { Pizza } from "../types/pizza";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../styles/Pizza.css";
import {
  Button,
  Card,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { IoCartOutline } from "react-icons/io5";

const AllPizza = () => {
  const navigate = useNavigate();

  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);
  const [cart, setCart] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("cart") ?? "[]")
  ); // csak ID-kat tárolok

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((response) => setPizzak(response.data))
      .catch(() => toast.error("A pizzák betöltése sikertelen volt"));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const generateCard = (p: Pizza) => {
    return (
      <Col
        xs={"auto"}
        sm={"auto"}
        md={"auto"}
        lg={"auto"}
        xl={"auto"}
        key={p.id}
      >
        <Card id="pizzakartya" className="h-100" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={`${BACKEND_URL}/kepek/${p.imageUrl}`} />
          <Card.Body>
            <Card.Title>{p.nev}</Card.Title>
            <Card.Text>{p.leiras}</Card.Text>
            <div className="d-flex justify-content-between mt-auto">
              <Button
                onClick={() => navigate(`/selected/${p.id}`)}
                variant="primary"
              >
                Megtekintés
              </Button>
              <Button
                onClick={() => {
                  setCart([...cart, Number(p.id)]);
                  toast.success("Sikeresen a kosárba tetted a terméket!");
                }}
                variant="success"
              >
                Kosárba
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <>
      <Navbar expand="xl" className="bg-body-tertiary" fixed="top">
        <Container>
          <Navbar.Brand href="/">Pizzák</Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="/add-pizza">Új Pizza</Nav.Link>
          </Nav>

          <Nav className="ms-auto" id="cart-nav">
            <Nav.Link href="/cart">
              <IoCartOutline />({cart.length})
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <Row
          xs={"auto"}
          md={"auto"}
          lg={"auto"}
          xl={"auto"}
          xxl={"auto"}
          className="justify-content-center g-4"
        >
          {pizzak.map((i) => generateCard(i))}
        </Row>
      </Container>
    </>
  );
};

export default AllPizza;
