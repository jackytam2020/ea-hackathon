import "./Header.scss";

import AccessibilityIcon from "../../assets/images/AssistiveTechlogo.png";

export default function Header() {
  return (
    <section className="header">
      <button className="header__button">Sign In</button>
      <button className="header__button">Join Now</button>
      <img src={AccessibilityIcon} alt="handicap sign and laptop icon" className="header__accessibility-icon"></img>
    </section>
  );
}
