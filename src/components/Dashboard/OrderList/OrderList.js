import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { loginContext } from "../../../App";
import Dashboard from "../Dashboard/Dashboard";

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
        {ordersByEmail.length &&
          ordersByEmail.map((order) => (
            <div>
              <h4>{order.selectedService.title}</h4>
            </div>
          ))}
      </section>
    </Dashboard>
  );
}

export default OrderList;
