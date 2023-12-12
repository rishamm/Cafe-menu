import React from "react";
import "./home.css";
import Banner from "../components/Home/Banner";
import Card from "../components/Home/Card";
import Footer from "../components/shared/Footer";
import { menu } from "../Data/Home";
const Home = () => {
  return (
    <>
      <Banner/>
      <div className="pb-20 pt-10">
      <Card menu={menu} heading={"Drinks"} />
      <Card menu={menu} heading={"Burgers" } />
      <Card menu={menu} heading={"Mocktails" } />
      </div>
      <Footer/>
    </>
  );
};

export default Home;
