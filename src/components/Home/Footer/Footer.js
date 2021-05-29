import {
  faFacebook,
  faInstagramSquare,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
// import lionItIcon from '../../images/footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="text-center my-5 py-5">
        <h1 className="text-white">
          {/* <img
            style={{ width: "100px", color: "white" }}
            src={repairIcon}
            alt=""
          /> */}
          Lion IT Solution
        </h1>
        <h5 className="text-brand text-white">ADDRESS:</h5>
        <p className="text-white">Rotterdam, Netherlands/33e</p>
        <h5 className="text-brand text-white">SHOP HOURS:</h5>
        <p className="text-white">
          Monday - Friday: 9:00am - 5:00pm, Saturday: 9:00am - 12:00am
        </p>
        <p className="text-white">
          Sunday: <span style={{ color: "red" }}>CLOSED</span>
        </p>
        <h3 className="text-white">
          <FontAwesomeIcon icon={faPhoneAlt} style={{ color: "#319ce3" }} /> 333
          222 999
        </h3>
        <a
          target="_blank"
          href="https://www.facebook.com"
          rel="noreferrer"
          className="p-2 fs-3"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          target="_blank"
          href="https://www.twitter.com"
          rel="noreferrer"
          className="p-2 fs-3"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com"
          rel="noreferrer"
          className="p-2 fs-3"
        >
          <FontAwesomeIcon icon={faInstagramSquare} />
        </a>
      </div>
      <div className="copyright text-center p-3">
        <h6 className="text-white">© 2021 ALL RIGHTS RESERVED</h6>
      </div>
    </section>
  );
};

export default Footer;
