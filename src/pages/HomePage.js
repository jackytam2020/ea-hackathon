import React, { useState, useRef, useEffect } from 'react';
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

  let hamMenuRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, true);
  }, []);

  //close hamburger menu slide out when clicked outside
  const handleClickOutside = (e) => {
    if (!hamMenuRef.current.contains(e.target)) {
      setHamMenuOpen(false);
    }
  };

  return (
    <div className="home">
      <MenuSlideOut
        hamMenuOpen={hamMenuOpen}
        setHamMenuOpen={setHamMenuOpen}
        hamMenuRef={hamMenuRef}
      />
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
