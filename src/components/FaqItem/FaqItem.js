import React from 'react';
import './FaqItem.scss';
import DropDownIcon from '../../assets/icons/drop-down-icon.svg';
function FaqItem(props) {
  return (
    <div className="faq-item">
      <p className="faq-item__question">{props.question}</p>
      <img className="faq-item__dropdown-icon" src={DropDownIcon} />
    </div>
  );
}

export default FaqItem;
