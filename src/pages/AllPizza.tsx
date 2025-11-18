import { useEffect, useState } from "react";
import apiClient, { baseURL } from "../api/apiClient";
import type { Pizza } from "../types/Pizza";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const AllPizza = () => {
  const navigate = useNavigate();

  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((Response) => setPizzak(Response.data))
      .catch(() => toast.error("A pizzák betöltése sikertelen volt"));
  }, []);

  const cardItem = (p: Pizza) => {
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={`${baseURL}/kepek/${p.imageUrl}`} />
          <Card.Body>
            <Card.Title>{p.nev}</Card.Title>
            <Card.Text>{p.leiras}</Card.Text>
            <Button variant="success" onClick={() => navigate(`/pizza/${p.id}`)}>Megtekintés</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <>
      <Container>
        <Row xs={"auto"} md={"auto"} className="g-4">{pizzak?.map((p) => cardItem(p))}</Row>
      </Container>
    </>
  );
};

export default AllPizza;
