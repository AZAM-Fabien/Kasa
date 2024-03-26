import { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./Slider.style";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const arrowRight = "src/assets/arrowRight.svg";
  const arrowStyle = { transform: "scaleY(-1)" };
  return (
    <>
      <S.CarouselContainer>
        <S.Image src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        <S.ArrowR
          onClick={() => handleClick("right")}
          src={arrowRight}
          alt="fleche droite"
        />
        <S.ArrowL
          onClick={() => handleClick("left")}
          src={arrowRight}
          alt="fleche gauche"
          style={arrowStyle}
        />
      </S.CarouselContainer>
    </>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
