import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [hideSidebar, setHideSidebar] = useState(false);
  const hidingStyle = {
    position: "absolute",
    visibility: "hidden",
    display: "none",
  };
  return (
    <>
      <div
        style={hideSidebar ? hidingStyle : {}}
        className={`sidebar col-md-3 d-flex justify-content-between`}
      >
        <ul>
          <>
            {" "}
            <Link to="/dashboard/orders">
              <li className="sidebar_link">Orders List</li>
            </Link>
            <Link to="/dashboard/review">
              <li className="sidebar_link">Review</li>
            </Link>{" "}
          </>
        </ul>
      </div>
      <div onClick={() => setHideSidebar(!hideSidebar)} className="m-2 close">
        <button className="btn btn-primary">X</button>
      </div>
    </>
  );
};

export default Sidebar;
