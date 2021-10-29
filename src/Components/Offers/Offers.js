import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")
      .then((res) => res.json())
      .then((data) => setOffers(data.meals));
  }, []);
  return (
    <div className="mt-5 container">
      {offers.map((offer) => (
        <Row>
          <Col md={5}>
            <img className="w-75 mb-4" src={offer.strMealThumb} alt="" />
          </Col>
          <Col md={3}>
            <h3>{offer.strMeal}</h3>
            <h4>{offer.strInstructions.slice(0, 49)}</h4>
          </Col>
          <Col md={4}>
            <p>From</p>
            <h3>{offer.strMeasure1}</h3>
            <Link to="/offer">
              {" "}
              <button>Book Now</button>
            </Link>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Offers;
