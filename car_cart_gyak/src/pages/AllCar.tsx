import { useEffect, useState } from "react";
import type { Car } from "../types/Car";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { IoCartOutline } from "react-icons/io5";

const AllCar = () => {
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

  const generateCard = (c: Car) => {
    return (
      <Col>
        <Card style={{ width: "18rem", height: "35rem" }}>
          <Carousel>
            {c?.images.map((url) => (
              <Carousel.Item>
                <Carousel interval={3000} />
                <img
                  src={`${BACKEND_URL}/kepek/${url}`}
                  height={300}
                  width={300}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <Card.Body>
            <Card.Title>
              {c.marka} {c.modell}
            </Card.Title>
            <Card.Subtitle>{c.ar} Ft</Card.Subtitle>
            <Card.Text>{c.leiras}</Card.Text>
            <Button
              variant="success"
              onClick={() => {
                setCart([...cart, Number(c.id)]);
                toast.success("Termék sikeresen kosárba helyezve");
              }}
            >
              Kosárba
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };
  return (
    <>
      <Navbar expand="xl" className="bg-body-tertiary" fixed="top">
        <Container>
          <Navbar.Brand href="/">Autók</Navbar.Brand>

          <Nav className="ms-auto" id="cart-nav">
            <Nav.Link href="/cart">
              <IoCartOutline />({cart.length})
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Row>{cars.map((i) => generateCard(i))}</Row>
    </>
  );
};
export default AllCar;
