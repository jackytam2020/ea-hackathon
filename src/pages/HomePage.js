import React, { useState } from 'react';
import './HomePage.scss';

import NavBar from '../components/nav-bar/NavBar';
import MenuSlideOut from '../components/MenuSlideOut/MenuSlideOut';
import Carousel from '../components/Carousel/Carousel';
import GraphicsSection from '../components/graphicsSection/GraphicsSection';
import HeroBanner from '../components/hero-banner/HeroBanner';
import Faq from '../components/faq/Faq';
import Footer from '../components/Footer/Footer';

function HomePage(props) {
  const [hamMenuOpen, setHamMenuOpen] = useState(false);
  return (
    <div className="home">
      <MenuSlideOut hamMenuOpen={hamMenuOpen} setHamMenuOpen={setHamMenuOpen} />
      <div className="home__nav">
        <NavBar setHamMenuOpen={setHamMenuOpen} />
      </div>
      <HeroBanner />
      <Carousel />
      <div>
        <GraphicsSection />
      </div>
      <div>
        <Faq />
      </div>
      <div className="home__footer">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
