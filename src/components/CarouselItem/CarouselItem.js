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
      <VideoModal modalIsOpen={modalIsOpen} videoSrc={props.videoSrc} />
      <img
        className="carousel-item__img"
        src={require('../../assets/images/' + props.src)}
        alt={props.name}
        onClick={() => {
          setModalIsOpen(true);
        }}
      ></img>
    </div>
  );
}

export default CarouselItem;
