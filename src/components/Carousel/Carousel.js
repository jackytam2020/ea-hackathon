import React, { useRef } from 'react';
import './Carousel.scss';
import { useDraggable } from 'react-use-draggable-scroll';
import CarouselItem from '../CarouselItem/CarouselItem';

// assets

function Carousel(props) {
  const ref = useRef();
  const { events } = useDraggable(ref);

  const carouselImgs = [
    {
      name: 'ApexLegends',
      src: 'apexlegends.jpg',
      videoSrc: 'https://www.youtube.com/embed/Ha_VsTDmoGg',
    },
    {
      name: 'Deadspace',
      src: 'deadspace.jpg',
      videoSrc: 'https://www.youtube.com/embed/cTDJNZ9cK1w',
    },
    {
      name: 'Fifa',
      src: 'fifa.png',
      videoSrc: 'https://www.youtube.com/embed/k8m9plRwMgk',
    },
    {
      name: 'Madden',
      src: 'madden-nfl-23.jpg',
      videoSrc: 'https://www.youtube.com/embed/Qv6G_w8RUOo',
    },
    {
      name: 'NeedForSpeed',
      src: 'nfsunbound.jpg',
      videoSrc: 'https://www.youtube.com/embed/YM6nUa2_EBQ',
    },
    {
      name: 'Sims',
      src: 'sims.png',
      videoSrc: 'https://www.youtube.com/embed/GJENRAB4ykA',
    },
    {
      name: 'legends',
      src: 'legends.png',
      videoSrc: 'https://www.youtube.com/embed/F3-BJfhnlWY',
    },
    {
      name: 'crysis',
      src: 'crysis.png',
      videoSrc: 'https://www.youtube.com/embed/u6gsOQ8HZAU',
    },
    {
      name: 'battlefield',
      src: 'battlefield.png',
      videoSrc: 'https://www.youtube.com/embed/DjEfRgY1TQc',
    },
    {
      name: 'masseffect',
      src: 'masseffect.png',
      videoSrc: 'https://www.youtube.com/embed/n8i53TtQ6IQ',
    },
  ];

  return (
    <div className="carousel-container">
      <div className="carousel" {...events} ref={ref}>
        {carouselImgs.map((game) => {
          return <CarouselItem {...game} alt="electronic arts game" />;
        })}
      </div>
    </div>
  );
}

export default Carousel;
