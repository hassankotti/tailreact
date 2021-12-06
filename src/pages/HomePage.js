import React from "react";
import FAQs from "../components/FAQs";
import Hero from "../components/Hero";
import RoadMap from "../components/RoadMap";
import Team from "../components/Team";
import Footer from "../layouts/Footer";
import Layout from "../layouts/Layout";
import Navbar from "../layouts/Navbar";

const HomePage = () => {
  return (
    <Layout>
      <div className="hero-pattern hero">
        <Navbar />
        <Hero />
      </div>
      <Team />
      <FAQs />
      <RoadMap />
      <Footer />
    </Layout>
  );
};

export default HomePage;
