import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import loginImage from "../../Utilities/Login/Login.png";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useHistory } from "react-router";

const Login = () => {
  const { user, googleSignIn, setUser, setIsLoading, isLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        history.push(redirect_url);
        const user = result.user;
        setUser(user);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="container mt-5">
      <Row className="d-flex align-items-center">
        <Col md={6} className="text-center">
          <div className="">
            <h2 className="mb-4">Login With</h2>
            <button
              onClick={handleGoogleLogin}
              className="btn btn-danger w-75 fs-4"
            >
              <FontAwesomeIcon className="ms-auto" icon={faGoogle} /> Google
            </button>
          </div>
        </Col>
        <Col md={6}>
          <div className="d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faPlaneDeparture} />
            <h4 className="ms-3">
              Lets<span className="text-primary">Travel</span>
            </h4>
          </div>
          <h4 className="text-center">
            Do not follow where the path may lead. Go instead where there is no
            path and leave a trail
          </h4>
          <img
            className="img-fluid"
            style={{ height: "350px" }}
            src={loginImage}
            alt=""
          />
        </Col>
      </Row>
    </div>
  );
};

export default Login;
