import React from 'react';
import './LargeImageCard.scss';

function LargeImageCard({
  src,
  alt,
  reference,
  reference2,
  myElementIsVisible1,
  myElementIsVisible2,
  subheader,
  textBody,
}) {
  return (
    <div className="large-image-card">
      <div
        className={
          myElementIsVisible1
            ? 'large-image-card__image-container--up'
            : 'large-image-card__image-container--down'
        }
      >
        <img
          className="large-image-card__image"
          src={src}
          alt={alt}
          ref={reference}
        />
      </div>

      <div className="large-image-card__text-container">
        <h2
          ref={reference2}
          className={
            myElementIsVisible2
              ? 'large-image-card__subheader--up'
              : 'large-image-card__subheader--down'
          }
        >
          {subheader}
        </h2>
        <p
          ref={reference2}
          className={
            myElementIsVisible2
              ? 'large-image-card__text--up'
              : 'large-image-card__text--down'
          }
        >
          {textBody}
        </p>
      </div>
    </div>
  );
}

export default LargeImageCard;
