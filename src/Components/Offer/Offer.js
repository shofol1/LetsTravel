import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";

const Offer = () => {
  const { id } = useParams();
  const [sigleService, setSigleService] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setSigleService(data));
  }, []);
  return (
    <div className="mb-3">
      <div className="bg-primary p-5 mt-2 text-center">
        <h1 className="text-white">Book Now</h1>
      </div>
      <Container className="mt-2">
        <Card className="text-center">
          <Card.Header>
            {" "}
            <img
              className="img-fluid w-50"
              src={sigleService.picture}
              alt=""
            />{" "}
          </Card.Header>
          <Card.Body>
            <Card.Title>{sigleService?.name}</Card.Title>
            <Card.Text>{sigleService?.Duratuion}</Card.Text>
            <Card.Text>{sigleService?.price}</Card.Text>
            <Card.Text>
              <span className="fw-bold"> For More Information Call Now</span>:{" "}
              {sigleService?.phone}
            </Card.Text>
            <Button variant="primary">Confirm Booking</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Offer;
