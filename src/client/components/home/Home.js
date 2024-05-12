import React from "react";
import Header from "../header/Header.js";
import food from "../../assets/images/meal.jpg";
// import "./Home.css"

function Home() {
  return (
    <div>
      <Header />

      <img  src={food} />
    </div>
  );
}

export default Home;
