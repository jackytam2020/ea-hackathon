import React from 'react';
import './HomePage.scss';

import NavBar from '../components/nav-bar/NavBar';
import Carousel from '../components/Carousel/Carousel';
import GraphicsSection from '../components/graphicsSection/GraphicsSection';
import HeroBanner from '../components/hero-banner/HeroBanner';

function HomePage(props) {
  return (
    <div className="home">
      <NavBar />
      {/* <section className="home__hero"> */}
      <HeroBanner />
      {/* </section> */}
      <Carousel />
      <GraphicsSection />
    </div>
  );
}

export default HomePage;
