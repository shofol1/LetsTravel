import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  var today = new Date();
  var date = today.getFullYear();
  return (
    <div className="bg-dark text-white p-2">
      <Container className="pt-2 d-flex justify-content-between">
        <p>
          ©<span className="text-secondary">LetsTravel</span> , All rights
          reserved {date}. Designed by :-{" "}
          <a target="_blank" rel="noreferrer" href="https://shofoll.com/">
            shofol
          </a>{" "}
          .
        </p>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faPlaneDeparture} />
          <h4 className="ms-3">
            Lets<span className="text-danger">Travel</span>
          </h4>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
