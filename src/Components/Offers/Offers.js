import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "../Offers/Offers.css";
const Offers = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    fetch("https://chilling-ghoul-37442.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);
  return (
    <div>
      {offers.length === 0 ? (
        <div className="text-center">
          <Spinner animation="grow" variant="primary" />
        </div>
      ) : (
        <Fade left>
          <div className="mt-5 container">
            {offers.map((offer) => (
              <Row
                key={offer?._id}
                className="border border-2 p-4 mb-2 effect "
              >
                <Col md={4} className="text-center">
                  <img
                    className="w-75 mb-4 rounded"
                    src={offer?.picture}
                    alt=""
                  />
                </Col>
                <Col md={5} className="res">
                  <h3 className="text-res">{offer?.name}</h3>
                  <p>{offer.about}</p>
                </Col>
                <Col
                  className="mt-auto mb-auto text-res borderLeft"
                  md={3}
                  style={{ height: "200px" }}
                >
                  <h3>
                    {offer.price}
                    <span className="fw-bold fs-2">৳</span>
                  </h3>
                  <Link to={`/offer/${offer?._id}`}>
                    {" "}
                    <button className="btn btn-primary">Book Now</button>
                  </Link>
                </Col>
              </Row>
            ))}
          </div>
        </Fade>
      )}
    </div>
  );
};

export default Offers;
