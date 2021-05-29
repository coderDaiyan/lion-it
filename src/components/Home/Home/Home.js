import React from "react";
import Review from "../../Review/Review";
import Schedule from "../../Schedule/Schedule";
import Services from "../../Services/Services";
import Header from "../Header/Header";

function Home() {
  return (
    <div>
      <Header></Header>
      <Schedule></Schedule>
      <Services></Services>
      <Review></Review>
    </div>
  );
}

export default Home;
