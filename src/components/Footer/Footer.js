import React from 'react';
import './Footer.scss';

import FacebookIcon from '../../assets/icons/facebook-icon.svg';
import TwitterIcon from '../../assets/icons/twitter-icon.svg';
import YoutubeIcon from '../../assets/icons/youtube-icon.svg';
import InstagramIcon from '../../assets/icons/instagram-icon.svg';
import TwitchIcon from '../../assets/icons/twitch-icon.svg';
import EaLogo from '../../assets/icons/ea-footer-logo.svg';
function Footer(props) {
  return (
    <section className="footer">
      <div className="footer__top">
        <div className="footer__width-container">
          <ul className="footer__link-list">
            <li className="footer__link">Careers</li>
            <li className="footer__link">Executives</li>
            <li className="footer__link">Impact Report</li>
            <li className="footer__link">Our Commitments</li>
            <li className="footer__link">Partner With Us</li>
          </ul>
          <div className="footer__top-socials">
            <p className="footer__social-header">Join The Conversation</p>
            <div className="footer__social-icons">
              <img
                className="footer__social-icon"
                alt="facebook icon"
                src={FacebookIcon}
              />
              <img
                className="footer__social-icon"
                alt="twitter icon"
                src={TwitterIcon}
              />
              <img
                className="footer__social-icon"
                alt="youtube icon"
                src={YoutubeIcon}
              />
              <img
                className="footer__social-icon"
                alt="instagram icon"
                src={InstagramIcon}
              />
              <img
                className="footer__social-icon"
                alt="twitch icon"
                src={TwitchIcon}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-width-container">
          <div className="footer__logo-container">
            <img className="footer__logo" alt="ea footer logo" src={EaLogo} />
          </div>

          <div className="footer__bottom-right">
            <ul className="footer__link-list footer__flexed-list">
              <li className="footer__link">Game Library</li>
              <li className="footer__link">Subscribe</li>
              <li className="footer__link">Redeem Code</li>
              <li className="footer__link">EA app</li>
              <li className="footer__link">About</li>
              <li className="footer__link">Accessibility</li>
              <li className="footer__link">Help</li>
            </ul>

            <div className="footer__misc-links">
              <ul className="footer__left-misc-links">
                <li className="footer__link">Legal & Privacy</li>
                <li className="footer__link">Google Privacy Policy</li>
                <li className="footer__link">YouTube Terms of Service Code</li>
                <li className="footer__link">
                  Privacy & Cookie Policy (Your Privacy Rights)
                </li>
              </ul>
              <ul className="footer__right-misc-links">
                <li className="footer__link">User Agreement</li>
                <li className="footer__link">Cookie Preference</li>
                <li className="footer__link">Online Service Updates</li>
                <li className="footer__link">Security</li>
              </ul>
            </div>
            <p className="footer__copyright">
              &copy; 2022 Electronic Arts Inc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
