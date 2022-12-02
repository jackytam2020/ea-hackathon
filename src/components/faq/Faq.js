import React from 'react';
import './Faq.scss';
import WindowsLogo from '../../assets/icons/windows-icon.svg';
import FaqItem from '../FaqItem/FaqItem';
function Faq(props) {
  const faqItems = [
    {
      question: 'How will the download work?',
      response:
        'EA App download begins & Origin will be uninstalled automatically to ensure an optimal user experience',
    },
    {
      question: 'What will happen to my current games and content?',
    },
    {
      question: 'What will happen to my in-game hours and achievements?',
    },
    {
      question: 'What will happen to my Origin friends list?',
    },
    {
      question: 'How do in-game purchases transfer over?',
    },
    {
      question: 'How do I start playing games?',
    },
  ];
  return (
    <section className="faq">
      <div className="faq__download-btn">
        <div className="faq__btn-contents">
          <p>Download EA App for </p>
          <img className="faq__windows-logo" src={WindowsLogo} />
        </div>
      </div>

      <h3 className="faq__header">FAQ on Downloading the EA App</h3>

      <div className="faq__item-list">
        {faqItems.map((item) => (
          <FaqItem {...item} />
        ))}
      </div>
    </section>
  );
}

export default Faq;
