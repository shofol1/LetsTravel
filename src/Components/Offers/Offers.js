import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services", {})
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);
  return (
    <div className="mt-5 container">
      {offers.map((offer) => (
        <Row className="border border-2 p-4 mb-2">
          <Col md={4}>
            <img className="w-75 mb-4 rounded" src={offer.picture} alt="" />
          </Col>
          <Col md={5}>
            <h3>{offer.name}</h3>
            <p>{offer.about}</p>
          </Col>
          <Col
            className="mt-auto mb-auto border-start"
            md={3}
            style={{ height: "200px" }}
          >
            <h3>{offer.price}</h3>
            <Link to={`/offer/${offer._id}`}>
              {" "}
              <button className="btn btn-primary">Book Now</button>
            </Link>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Offers;
