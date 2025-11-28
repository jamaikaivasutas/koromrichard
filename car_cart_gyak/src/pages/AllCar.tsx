import { useEffect, useState } from "react";
import type { Car } from "../types/Car";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { toast } from "react-toastify";
import { Button, Card, Carousel, Container, Row } from "react-bootstrap";

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
      <Card style={{ width: "18rem" }}>
        <Carousel>
          {c?.images.map((url) => (
            <Carousel.Item>
              <img src={`${BACKEND_URL}/kepek/${url}`} height={500} />
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Body>
          <Card.Title>
            {c.marka}
            {c.modell}
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button
            variant="success"
            onClick={() => {
              setCart([...cart, Number(p.id)]);
              toast.success("Termék sikeresen kosárba helyezve");
            }}
          >
            Kosárba
          </Button>
        </Card.Body>
      </Card>
    );
  };
  return <Row>{cars.map((i) => generateCard(i))}</Row>;
};
export default AllCar;
