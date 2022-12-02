import "./Header.scss";

import AccessibilityIcon from "../../assets/images/AssistiveTechlogo.png";

import { useInView } from "react-intersection-observer";

export default function Header() {
  const { ref: header, inView: isHeaderVisible } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  return (
    <section ref={header} className={`header ${isHeaderVisible ? "" : "header--hidden"}`}>
      <button className="header__button">Sign In</button>
      <button className="header__button">Join Now</button>
      <img src={AccessibilityIcon} alt="handicap sign and laptop icon" className="header__accessibility-icon"></img>
    </section>
  );
}
