import React, { useRef } from "react";
import "./Carousel.scss";
import { useDraggable } from "react-use-draggable-scroll";

// assets
import ApexLegends from "../../assets/images/apexlegends.jpg";
import Deadspace from "../../assets/images/deadspace.jpg";
import Fifa from "../../assets/images/fifa.png";
import Madden from "../../assets/images/madden-nfl-23.jpg";
import NeedForSpeed from "../../assets/images/nfsunbound.jpg";
import Sims from "../../assets/images/sims.png";

function Carousel(props) {
  const ref = useRef();
  const { events } = useDraggable(ref);

  const carouselImgs = [ApexLegends, Deadspace, Fifa, Madden, NeedForSpeed, Sims];

  return (
    <div className="carousel-container">
      <div className="carousel" {...events} ref={ref}>
        {carouselImgs.map((game) => {
          return <img className="carousel__item" src={game} alt="electronic arts game"></img>;
        })}
      </div>
    </div>
  );
}

export default Carousel;
