import React from "react";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <>
      <section
        // style={{ marginTop: "100px" }}
        className="container p-5 d-flex justify-content-start"
      >
        <div className="content">
          {/* <div className="logo-container"><img src={logo} alt="" /></div> */}
          <h1 className="text-white fw-bold fs-1 brand">TIGER IT</h1>
          <h1 className="text-white header-heading fw-bold">
            Help Challenge <br /> Critical Activities
          </h1>
          <p className="text-white">
            We are experienced professionals who understand that IT services are
            changing, <br /> and are true partners who care about your success
            and security.
          </p>
          <button
            className="btn me-4 header-button"
            style={{ color: "white", backgroundColor: "#0092FF" }}
          >
            More About Us
          </button>
          <button
            className="btn header-button"
            style={{ backgroundColor: "white" }}
          >
            Our Services
          </button>
        </div>
      </section>
    </>
  );
};

export default HeaderMain;
