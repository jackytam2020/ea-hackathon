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
      response:
        'All the current games and content will transfer over to the newly downloaded app',
    },
    {
      question: 'What will happen to my in-game hours and achievements?',
      response:
        'Any game that lists in-game hours or achievements will be carried over to the EA app. Head to a game page in the EA app to view your achievements and time spent in that game!',
    },
    {
      question: 'What will happen to my Origin friends list?',
      response:
        'Your Origin friends list automatically transfers over once you log in to the EA app, so you don’t have to worry about remembering all those player IDs.',
    },
    {
      question: 'How do in-game purchases transfer over?',
      response:
        'Your in-game purchases will also carry over when you log in to the EA app.',
    },
    {
      question: 'How do I start playing games?',
      response:
        'Sign into the EA App using your current Origin credentials to continue playing your favourite games.',
    },
  ];
  return (
    <section className="faq">
      <div className="faq__download-btn">
        <div className="faq__btn-contents">
          <img className="faq__windows-logo" src={WindowsLogo} />
          <p>Download EA App for Windows</p>
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
