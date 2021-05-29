import React from "react";
import Blogs from "../../Blogs/Blogs";
import Footer from "../../Footer/Footer";
import Review from "../../Review/Review";
import Schedule from "../../Schedule/Schedule";
import Services from "../../Services/Services";
import Header from "../Header/Header";

function Home() {
  return (
    <div>
      <Header />
      <Schedule />
      <Services />
      <Review />
      <Blogs />
      <Footer />
    </div>
  );
}

export default Home;
