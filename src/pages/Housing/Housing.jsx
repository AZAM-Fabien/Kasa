import { housingList } from "/src/Datas/Housing.js";
import PropTypes from "prop-types";
import Slider from "/src/components/Slider/Slider.jsx";

function Housing({ id }) {
  const selectedHousing = housingList.find((housing) => housing.id === id);

  return (
    <>
      <h1>{selectedHousing.title}</h1>
      <Slider imageSlider={selectedHousing.pictures} />
    </>
  )
}

Housing.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Housing;
