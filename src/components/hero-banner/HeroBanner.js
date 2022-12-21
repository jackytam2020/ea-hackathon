import './HeroBanner.scss';

import HeroImage from '../../assets/images/hero-banner.png';
import WindowsLogo from '../../assets/images/windowsLogo.png';

export default function HeroBanner() {
  return (
    <article className="hero">
      <div className="hero__top">
        <div className="hero--left">
          <div className="hero__text">
            <h1 className="hero__title">Introducing the EA app</h1>
            <h3 className="hero__subtitle">
              A better, faster, more connected way to gaming
            </h3>
          </div>
          <div className="hero__buttons">
            <button className="button">
              EA App for
              <img
                src={WindowsLogo}
                alt="windows operating system icon"
                className="button__icon"
              ></img>
            </button>
          </div>
        </div>
        <div className="hero--right hero__image-container">
          <img
            className="hero__image"
            src={HeroImage}
            alt="apex legends new season promo"
          ></img>
        </div>
      </div>
      <div className="hero__carousel-text">
        <h3 className="hero__carousel-title">Explore & Discover</h3>
        <p className="hero__subtext">
          Explore an ever-expanding library of titles ranging from indie
          darlings to triple-A hits. Discover EA’s newest releases and see what
          your friends are playing
        </p>
      </div>
    </article>
  );
}
