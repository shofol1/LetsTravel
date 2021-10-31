import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import img1 from "../../Utilities/HowItWorks/service_01.jpg";
import img2 from "../../Utilities/HowItWorks/service_02.jpg";
import img3 from "../../Utilities/HowItWorks/service_03.jpg";
import Slide from "react-reveal/Slide";
import "./HowITWork.css";

const HowItWork = () => {
  return (
    <div>
      <div className="container p-5 text-center bg-secondary text-white">
        <h1>How It Works</h1>
        <p>
          Discover how <span className="text-dark fw-bold">LetsTravel</span> can
          help you to find everything you want.
        </p>
      </div>
      <Container className="text-center mb-5 mt-4">
        <Row>
          <Col md={4}>
            <Slide left className="deley">
              <Card
                className="text-center effect"
                style={{ width: "18rem", height: "340px" }}
              >
                <div className="mt-auto mb-auto">
                  <Card.Img className="w-25 mx-auto" variant="top" src={img1} />
                  <Card.Body>
                    <Card.Title>Booking</Card.Title>
                    <Card.Text>
                      At first book your service.Then wait for the confirmation.
                    </Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Slide>
          </Col>
          <Col md={4}>
            <Card
              className="text-center effect"
              style={{ width: "18rem", height: "340px" }}
            >
              <div className="mt-auto mb-auto">
                <Card.Img className="w-25 mx-auto" variant="top" src={img2} />
                <Card.Body>
                  <Card.Title>Get Your Ticket</Card.Title>
                  <Card.Text>
                    After confirmation we will send you your ticket through
                    email and dont delete the email.
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Slide right className="deley">
              <Card
                className="text-center effect"
                style={{ width: "18rem", height: "340px" }}
              >
                <div className="mt-auto mb-auto">
                  <Card.Img className="w-25 mx-auto" variant="top" src={img3} />
                  <Card.Body>
                    <Card.Title>Enjoy The Holidays</Card.Title>
                    <Card.Text>
                      We will try our best to give you the best service and
                      makes your hoiliday memorable
                    </Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Slide>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HowItWork;
