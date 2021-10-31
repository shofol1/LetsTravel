import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Offer = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [sigleService, setSigleService] = useState([]);
  const userRef = useRef();
  const contactRef = useRef();
  const addressRef = useRef();
  const memberRef = useRef();
  const serviceIdRef = useRef();
  const emailRef = useRef();
  const [status, setStatus] = useState("pendeing");
  const notify = () => toast.success("Your booking is confirmed!");
  const {
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    fetch(`https://chilling-ghoul-37442.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setSigleService(data));
  }, []);

  // handle booking
  const handleBooking = (e) => {
    const username = userRef.current.value;
    const contact = contactRef.current.value;
    const address = addressRef.current.value;
    const member = memberRef.current.value;
    const service_id = serviceIdRef.current.value;
    const email = emailRef.current.value;
    const customerInfo = {
      service_id: service_id,
      name: username,
      contact: contact,
      address: address,
      member: member,
      email: email,
      status: status,
    };
    fetch("https://chilling-ghoul-37442.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(customerInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          notify();
          contactRef.current.value = "";
          addressRef.current.value = "";
          memberRef.current.value = "";
        }
      });
    e.preventDefault();
  };
  return (
    <div className="mb-3">
      <div>
        <ToastContainer />
      </div>
      <div className="bg-primary p-5 mt-2 text-center">
        <h1 className="text-white">Book Now</h1>
      </div>
      <Container className="mt-2">
        <Row>
          <Col md={6}>
            <Card className="text-center">
              <Card.Header>
                {" "}
                <img
                  className="img-fluid w-75"
                  src={sigleService?.picture}
                  alt=""
                />{" "}
              </Card.Header>
              <Card.Body>
                <Card.Title>{sigleService?.name}</Card.Title>
                <Card.Text>{sigleService?.Duration}</Card.Text>
                <Card.Text>
                  {sigleService?.price}
                  <span className="fw-bold">৳</span>
                </Card.Text>
                <Card.Text>
                  <span className="fw-bold">
                    {" "}
                    For More Information Call Now
                  </span>
                  : {sigleService?.phone}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <h2 className="text-center text-secondary">Place Booking</h2>
            <form className="w-75 mx-auto">
              <input
                ref={serviceIdRef}
                className="w-100 mt-3 mb-3"
                value={id}
              />
              <input
                placeholder="UserName"
                ref={userRef}
                defaultValue={user.displayName}
                className="w-100 mt-3 mb-3"
              />
              <input
                placeholder="UserName"
                ref={emailRef}
                value={user.email}
                className="w-100 mt-3 mb-3"
              />
              <input
                ref={contactRef}
                className="w-100 mt-3 mb-3"
                placeholder="Contact"
              />
              <input
                ref={addressRef}
                className="w-100 mt-3 mb-3"
                placeholder="Address"
              />
              <input
                ref={memberRef}
                className="w-100 mt-3 mb-3"
                placeholder="Members Number"
              />

              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}

              <input
                className="btn btn-primary"
                type="submit"
                value="Confirm Booking"
                onClick={handleBooking}
              />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Offer;
