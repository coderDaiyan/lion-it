import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { loginContext } from "../../../App";
import Dashboard from "../Dashboard/Dashboard";
import "./OrderList.css";

function OrderList() {
  const [loggedInUser] = useContext(loginContext);
  const state = useSelector((data) => data?.order?.allOrders);

  console.log(state);

  const ordersByEmail = state.filter(
    (order) => order?.data?.email === loggedInUser?.email
  );

  console.log(ordersByEmail);
  return (
    <Dashboard>
      <section className="container">
        <h1>All Orders</h1>
        <div className="row">
          {ordersByEmail.length &&
            ordersByEmail.map((order) => (
              <div
                className={`order_list col-md-3 ${
                  order.status === "Pending"
                    ? "alert alert-warning"
                    : order.status === "Rejected"
                    ? "alert alert-danger"
                    : "alert alert-success"
                }`}
              >
                <h5>{order.selectedService.title}</h5>
                <h6>Name: {order.data.name}</h6>
                <h6>Email: {order.data.email}</h6>
                <h6>Date: {order.time}</h6>
                <h6>Status: {order.status}</h6>
              </div>
            ))}
        </div>
      </section>
    </Dashboard>
  );
}

export default OrderList;
