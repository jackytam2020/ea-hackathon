import "./NavBar.scss";

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
        <button className="nav__button">CTA</button>
        <button className="nav__button">CTA</button>
      </div>
    </nav>
  );
}
