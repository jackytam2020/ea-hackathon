import React, { useState } from 'react';
import './FaqItem.scss';
import DropDownIcon from '../../assets/icons/drop-down-icon.svg';
import UpArrowIcon from '../../assets/icons/up-arrow-icon.svg';
function FaqItem(props) {
  const [openResponse, setOpenResponse] = useState(false);
  return (
    <div className="faq-item-row">
      <div className="faq-item">
        <p className="faq-item__question">{props.question}</p>
        <img
          className="faq-item__dropdown-icon"
          src={DropDownIcon}
          onClick={() => {
            setOpenResponse(true);
          }}
        />
      </div>

      {props.response && (
        <div
          className={
            openResponse ? 'faq-item-response--open' : 'faq-item-response'
          }
        >
          <p className="faq-item__question">{props.response}</p>
          <img
            className="faq-item__dropdown-icon"
            src={UpArrowIcon}
            onClick={() => {
              setOpenResponse(false);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default FaqItem;
