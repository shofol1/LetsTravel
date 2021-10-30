import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageAllBookings = () => {
  const [allService, setAllService] = useState([]);
  const notify = () => toast.warn("Your booking is deleted!");
  const approved = () => toast.warn("Your booking is approved!");
  useEffect(() => {
    fetch("http://localhost:5000/myOrders")
      .then((res) => res.json())
      .then((data) => setAllService(data));
  }, [allService]);

  //Delete handle
  const handleAllDelete = (id) => {
    fetch(`http://localhost:5000/myOrders/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Are You Sure that You want to delete?");
          notify();
        }
      });
  };
  const handlePending = (id) => {
    fetch(`http://localhost:5000/updateStatus/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          approved();
        }
      });
  };

  return (
    <div style={{ height: "100vh" }}>
      <div>
        <ToastContainer />
      </div>
      <div className="bg-primary p-5 mt-2 text-center text-white">
        <h1>Manage All Bookings</h1>
      </div>
      <Container>
        <Table responsive>
          <thead>
            <tr>
              <th>Service_id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Members</th>
              <th>Address</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allService.map((service) => (
              <tr>
                <td>{service.service_id}</td>
                <td>{service.name}</td>
                <td>{service.email}</td>
                <td>{service.member}</td>
                <td>{service.address}</td>
                <td>{service.status}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleAllDelete(service._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-success ms-1"
                    onClick={() => handlePending(service._id)}
                  >
                    approve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ManageAllBookings;
