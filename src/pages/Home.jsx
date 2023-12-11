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
      

     

      <Card menu={menu}/>
      <Card menu={menu}/>
      
      <Footer/>
    </>
  );
};

export default Home;
