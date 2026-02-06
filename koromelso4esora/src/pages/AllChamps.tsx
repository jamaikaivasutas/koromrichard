import { useEffect, useState } from "react";
import type { Champ } from "../types/Champ";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { toast } from "react-toastify";
import { Card, Carousel, Col, Row } from "react-bootstrap";

const AllChamps = () => {
  const [champs, setChamps] = useState<Array<Champ>>([]);

  useEffect(() => {
    apiClient
      .get("/champions")
      .then((res) => setChamps(res.data))
      .catch(() => toast.error("Champions failed to load"));
  }, []);

  const generateCard = (c: Champ) => {
    return (
      <Col>
        <Card className="h-100" style={{ width: "18rem" }}>
          <Carousel>
            {c?.images.map((url) => (
              <Carousel.Item>
                <Carousel interval={3000} />
                <Card.Img src={`${BACKEND_URL}/images/${url}`} />
              </Carousel.Item>
            ))}
          </Carousel>
          <Card.Body style={{ padding: "1rem" }}>
            <Card.Title>
              {c.name} - {c.blue_essence} - {c.difficulty}
            </Card.Title>
            <Card.Subtitle>
              {c.lane} - {c.role} - {c.damage_type}
            </Card.Subtitle>
            <Card.Text>{c.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return <Row>{champs.map((e) => generateCard(e))}</Row>;
};

export default AllChamps;
