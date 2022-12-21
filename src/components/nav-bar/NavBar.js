import './NavBar.scss';
import chevron from '../../assets/images/arrow_drop_down-24px.svg';
import Logo from '../../assets/logos/EALogo.png';

import { useInView } from 'react-intersection-observer';

import './Header.scss';

import AccessibilityIcon from '../../assets/images/AssistiveTechlogo.png';

import { GiHamburgerMenu } from 'react-icons/gi';

export default function NavBar(props) {
  const { ref: nav, inView: isNavVisible } = useInView({
    /* Optional options */
    trackVisibility: true,
    initialInView: true,
    delay: 100,
    threshold: 1,
  });
  const { ref: header, inView: isHeaderVisible } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  return (
    <>
      <section
        ref={header}
        className={`header ${isHeaderVisible ? '' : 'header--hidden'}`}
      >
        <button className="header__button">Sign In</button>
        <button className="header__button">Join Now</button>
        <img
          src={AccessibilityIcon}
          alt="handicap sign and laptop icon"
          className="header__accessibility-icon"
        ></img>
      </section>
      <nav ref={nav} className={`nav ${isHeaderVisible ? '' : 'nav--fixed'}`}>
        <div className="nav__drop-down-container">
          <GiHamburgerMenu
            className="nav__ham-icon"
            onClick={() => {
              props.setHamMenuOpen(true);
            }}
          />
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
    </>
  );
}
