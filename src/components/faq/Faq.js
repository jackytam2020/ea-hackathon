import React, { useState, useEffect } from 'react';
import './Faq.scss';
import WindowsLogo from '../../assets/icons/windows-icon.svg';
import FaqItem from '../FaqItem/FaqItem';

import axios from 'axios';
function Faq(props) {
  const [faqItems, setFaqItems] = useState([]);

  const PORT = process.env.REACT_APP_PORT;

  const getFaqItems = async () => {
    const response = await axios.get(`http://localhost:${PORT}/faq`);
    setFaqItems(response.data);
  };

  useEffect(() => {
    getFaqItems();
  }, []);

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
          <FaqItem key={item._id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Faq;
