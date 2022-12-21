import React, { useState, useRef, useEffect } from 'react';
import './CarouselItem.scss';
import Modal from 'react-modal';
import VideoModal from '../VideoModal/VideoModal';

function CarouselItem(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
  }, []);

  const handleClickOutside = (e) => {
    setModalIsOpen(false);
  };
  return (
    <div className="carousel-item">
      <div className="carousel-item__container">
        <VideoModal modalIsOpen={modalIsOpen} videoSrc={props.videoSrc} />
        <img
          className="carousel-item__img"
          src={props.src}
          alt={props.name}
          onClick={() => {
            setModalIsOpen(true);
          }}
        ></img>
      </div>
    </div>
  );
}

export default CarouselItem;
