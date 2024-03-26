import { housingList } from "/src/Datas/Housing.js";
import PropTypes from "prop-types";
import Carousel from "/src/components/Slider/Slider.jsx";

function Housing({ id }) {
  const selectedHousing = housingList.find((housing) => housing.id === id);

  const images = selectedHousing.pictures;

  return (
    <>
      <h1>{selectedHousing.title}</h1>
      <Carousel images={images} />
    </>
  );
}

Housing.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Housing;
