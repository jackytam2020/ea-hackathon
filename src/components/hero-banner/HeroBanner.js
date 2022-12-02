import "./HeroBanner.scss";

import HeroImage from "../../assets/images/hero-banner.jpg";

export default function HeroBanner() {
  return (
    <article className="hero">
      <div className="hero--left">
        <div className="hero__text">
          <h1 className="hero__title">The EA app for Windows</h1>
          <h3 className="hero__subtitle">Powering EA’s next generation of PC gaming</h3>
        </div>
        <div className="hero__buttons">
          <button className="button">Download for Windows</button>
          <button className="button">Download for MacOS</button>
        </div>
      </div>
      <div className="hero--right hero__image-container">
        <img className="hero__image" src={HeroImage} alt="apex legends new season promo"></img>
      </div>
    </article>
  );
}
