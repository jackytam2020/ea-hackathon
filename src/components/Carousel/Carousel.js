import React, { useRef } from 'react';
import './Carousel.scss';
import { useDraggable } from 'react-use-draggable-scroll';

function Carousel(props) {
  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <div className="carousel-container">
      <div className="carousel" {...events} ref={ref}>
        <div className="carousel__item"></div>
        <div className="carousel__item"></div>
        <div className="carousel__item"></div>
        <div className="carousel__item"></div>
        <div className="carousel__item"></div>
        <div className="carousel__item"></div>
        <div className="carousel__item"></div>
        <div className="carousel__item"></div>
        <div className="carousel__item"></div>
      </div>
    </div>
  );
}

export default Carousel;
