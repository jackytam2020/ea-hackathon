import "./NavBar.scss";
import chevron from "../../assets/images/arrow_drop_down-24px.svg";
import Logo from "../../assets/logos/EALogo.png";
export default function NavBar() {
  return (
    <nav className="nav">
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
