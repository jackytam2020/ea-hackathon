import "./NavBar.scss";
import chevron from "../../assets/images/arrow_drop_down-24px.svg";
import Logo from "../../assets/logos/EALogo.png";

import { useInView } from "react-intersection-observer";

export default function NavBar() {
  const { ref: nav, inView: isNavVisible } = useInView({
    /* Optional options */
    trackVisibility: true,
    initialInView: true,
    delay: 100,
    threshold: 1,
  });
  return (
    <nav ref={nav} className={`nav ${isNavVisible ? "" : "nav--fixed"}`}>
      <img className="nav__logo" src={Logo} alt="Electronic Arts Logo"></img>
      <div className="nav__ctas">
        <button className="nav__button">Sing In</button>
        <button className="nav__button">Join Now</button>
      </div>
      <div className="nav__drop-down-container">
        <img className="nav__logo" src={Logo} alt="Electronic Arts Logo" />
        <span className="nav__text">
          Games
          <img className="nav__icon" src={chevron} alt="drop down chevron" />
        </span>
        <span className="nav__text">
          More Experiences
          <img className="nav__icon" src={chevron} alt="drop down chevron" />
        </span>
        <span className="nav__text">
          About
          <img className="nav__icon" src={chevron} alt="drop down chevron" />
        </span>
        <span className="nav__text">
          Commitment
          <img className="nav__icon" src={chevron} alt="drop down chevron" />
        </span>
        <span className="nav__text">
          Resources
          <img className="nav__icon" src={chevron} alt="drop down chevron" />
        </span>
      </div>
    </nav>
  );
}
