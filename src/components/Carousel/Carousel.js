import React, { useRef, useState, useEffect } from 'react';
import './Carousel.scss';
import { useDraggable } from 'react-use-draggable-scroll';
import CarouselItem from '../CarouselItem/CarouselItem';

import axios from 'axios';

function Carousel(props) {
  const ref = useRef();
  const { events } = useDraggable(ref);

  const [carouselImgs, setCarouselImgs] = useState([]);

  const PORT = process.env.REACT_APP_PORT;

  const getCarouselImages = async () => {
    const response = await axios.get(`http://localhost:${PORT}/images`);
    setCarouselImgs(response.data);
  };

  useEffect(() => {
    getCarouselImages();
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel" {...events} ref={ref}>
        {carouselImgs.map((game) => {
          return (
            <CarouselItem key={game._id} {...game} alt="electronic arts game" />
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
