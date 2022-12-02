import React from "react";
import "./HomePage.scss";

import NavBar from "../components/nav-bar/NavBar";
import Carousel from "../components/Carousel/Carousel";
import GraphicsSection from "../components/graphicsSection/GraphicsSection";
import HeroBanner from "../components/hero-banner/HeroBanner";
import Faq from "../components/faq/Faq";

function HomePage(props) {
  return (
    <div className="home">
      <div>
        <NavBar />
        <HeroBanner />
        <Carousel />
      </div>
      <div>
        <GraphicsSection />
      </div>
      <div>
        <Faq />
      </div>
    </div>
  );
}

export default HomePage;
