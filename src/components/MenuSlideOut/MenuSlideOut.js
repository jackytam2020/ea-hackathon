import React from 'react';
import './MenuSlideOut.scss';

import Logo from '../../assets/logos/EALogo.png';
import chevron from '../../assets/images/arrow_drop_down-24px.svg';
import { RxCross2 } from 'react-icons/rx';

function MenuSlideOut({ hamMenuOpen, setHamMenuOpen, hamMenuRef }) {
  return (
    <div
      className={hamMenuOpen ? 'menu-slide-out--active' : 'menu-slide-out'}
      ref={hamMenuRef}
    >
      <div className="menu-slide-out__top-bar">
        <img className="menu-slide-out__logo" src={Logo} alt={'logo'} />
        <RxCross2
          className="menu-slide-out__close-icon"
          onClick={() => {
            setHamMenuOpen(false);
          }}
        />
      </div>

      <ul className="menu-slide-out__menu-links">
        <li className="menu-slide-out__menu-item">
          <span>Games</span>
          <img
            className="menu-slide-out__drop-icon"
            src={chevron}
            alt="drop down chevron"
          />
        </li>
        <li className="menu-slide-out__menu-item">
          <span> More Experiences</span>
          <img
            className="menu-slide-out__drop-icon"
            src={chevron}
            alt="drop down chevron"
          />
        </li>
        <li className="menu-slide-out__menu-item">
          <span>About</span>
          <img
            className="menu-slide-out__drop-icon"
            src={chevron}
            alt="drop down chevron"
          />
        </li>
        <li className="menu-slide-out__menu-item">
          <span>Commitment</span>
          <img
            className="menu-slide-out__drop-icon"
            src={chevron}
            alt="drop down chevron"
          />
        </li>
        <li className="menu-slide-out__menu-item">
          <span>Resources</span>
          <img
            className="menu-slide-out__drop-icon"
            src={chevron}
            alt="drop down chevron"
          />
        </li>
      </ul>
    </div>
  );
}

export default MenuSlideOut;
