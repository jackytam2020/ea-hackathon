import "./NavBar.scss";

import Logo from "../../assets/logos/EALogo.png";
export default function NavBar() {
  return (
    <nav className="nav">
      <img className="nav__logo" src={Logo} alt="Electronic Arts Logo"></img>
      <div className="nav__ctas">
        <button className="nav__button">CTA</button>
        <button className="nav__button">CTA</button>
      </div>
    </nav>
  );
}
