import { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./Slider.style";

const Slider = ({ imageSlider }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? imageSlider.length - 1 : prevIndex - 1
      );
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageSlider.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const arrowRight = "/assets/arrowRight.svg";
  const arrowStyle = { transform: "scaleX(-1)" };

  return (
    <>
      <S.SliderContainer>
        <S.Image
          src={imageSlider[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
        />
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
      </S.SliderContainer>
    </>
  );
};

Slider.propTypes = {
  imageSlider: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
