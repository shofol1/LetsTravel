import React, { useRef } from "react";
import addService from "../../Utilities/AddService/addService.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";

const AddNewService = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const priceRef = useRef();
  const DurationRef = useRef();
  const pictureRef = useRef();
  const phoneRef = useRef();
  const aboutRef = useRef();
  const notify = () => toast.success("new Service Added!");
  const { reset } = useForm();
  const handleAddForm = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const Duration = DurationRef.current.value;
    const price = priceRef.current.value;
    const picture = pictureRef.current.value;
    const about = aboutRef.current.value;
    const newServiceInfo = {
      name: name,
      email: email,
      phone: phone,
      Duration: Duration,
      price: price,
      picture: picture,
      about: about,
    };
    fetch("https://chilling-ghoul-37442.herokuapp.com/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newServiceInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          notify();
          nameRef.current.value = " ";
          emailRef.current.valu = " ";
          phoneRef.current.value = " ";
          DurationRef.current.value = " ";
          priceRef.current.value = " ";
          pictureRef.current.value = " ";
          aboutRef.current.value = " ";
        }
      });
    e.preventDefault();
  };
  return (
    <div className="mb-4">
      <div>
        <ToastContainer />
      </div>
      <div className="bg-primary p-5 mt-2 text-center text-white ">
        <h1>Add New User</h1>
      </div>
      <Container>
        <Row>
          <Col md={6}>
            <img className="img-fluid" src={addService} alt="" />
          </Col>
          <Col md={6}>
            <form
              className="w-75 mx-auto"
              onSubmit={handleAddForm}
              encType="multipart/form-data"
            >
              <input
                ref={nameRef}
                placeholder="Travel Location"
                className="w-100 mt-3 mb-3"
              />
              <input
                ref={emailRef}
                placeholder="Email"
                className="w-100 mt-3 mb-3"
              />
              <input
                ref={phoneRef}
                placeholder="Phone"
                className="w-100 mt-3 mb-3"
              />
              <input
                ref={DurationRef}
                className="w-100 mt-3 mb-3"
                placeholder="Duration"
              />
              <input
                ref={priceRef}
                className="w-100 mt-3 mb-3"
                placeholder="price"
              />
              <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label>Upload a image URL</Form.Label>
                <Form.Control ref={pictureRef} type="text" size="sm" />
              </Form.Group>
              <textarea
                rows="4"
                cols="50"
                ref={aboutRef}
                placeholder="why This Place Is famous?"
                className="w-100 mt-3 mb-3"
              />
              <input
                className="btn btn-primary"
                type="submit"
                value="ADD USER"
                onClick={() => reset()}
              />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddNewService;
