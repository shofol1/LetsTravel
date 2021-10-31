import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../MyBookings/MyBookings.css";
const MyBookins = () => {
  const { user } = useAuth();
  const [allbooking, setAllbooking] = useState([]);
  const [myBooking, setMybooking] = useState([]);
  const notify = () => toast.warn("Your booking is cancelled!");

  useEffect(() => {
    fetch("https://chilling-ghoul-37442.herokuapp.com/myOrders")
      .then((res) => res.json())
      .then((data) => setAllbooking(data));
  }, [allbooking]);
  useEffect(() => {
    const result = allbooking.filter((book) => book.email === user.email);
    setMybooking(result);
  }, [allbooking]);

  const handleDelete = (id) => {
    fetch(`https://chilling-ghoul-37442.herokuapp.com/myOrders/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Are You Sure that You want to cancel?");
          notify();
        }
      });
  };
  return (
    <div className="mb-5" style={{ height: "100vh" }}>
      <div>
        <ToastContainer />
      </div>
      <div className="bg-primary p-5 mt-2 text-center text-white ">
        <h1>My Bookings</h1>
      </div>
      <Container>
        <Table responsive>
          <thead>
            <tr>
              <th>Service_id</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Members Number</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {myBooking.length === 0 ? (
            <div>
              <Spinner animation="grow" variant="primary" />
            </div>
          ) : (
            <tbody>
              {myBooking.map((booking) => (
                <tr>
                  <td>{booking?.service_id}</td>
                  <td>{booking?.name}</td>
                  <td>{booking?.contact}</td>
                  <td>{booking?.member}</td>
                  <td>{booking?.status}</td>
                  <td>
                    <button
                      className="btn btn-danger btn"
                      onClick={() => handleDelete(booking?._id)}
                    >
                      Cancel booking
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </Table>
      </Container>
    </div>
  );
};

export default MyBookins;
