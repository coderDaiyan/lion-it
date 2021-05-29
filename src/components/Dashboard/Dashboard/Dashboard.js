import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";

function Dashboard({ children }) {
  return (
    <section className="d-flex">
      <Sidebar />
      {children}
    </section>
  );
}

export default Dashboard;
