import React from "react";
import Blogs from "../Blogs/Blogs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Review from "../Review/Review";
import Schedule from "../Schedule/Schedule";
import Services from "../Services/Services";

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
