import { housingList } from "/src/Datas/Housing.js";
import PropTypes from "prop-types";
import Slider from "/src/components/Slider/Slider.jsx";
import * as S from "./Housing.style";
import Collapse from "/src/components/Collapse/Collapse.jsx";

function Housing({ id }) {
  const selectedHousing = housingList.find((housing) => housing.id === id);

  return (
    <>
      <Slider imageSlider={selectedHousing.pictures} />
      <S.Layout1>
        <S.Layout2>
          <S.Title>{selectedHousing.title}</S.Title>
          <S.Location>{selectedHousing.location}</S.Location>
          <S.Tags> {selectedHousing.tags} </S.Tags>
        </S.Layout2>
        <S.Layout3>
          <S.Host>
            <S.HostName>{selectedHousing.host.name}</S.HostName>
            <S.HostPicture
              src={selectedHousing.host.picture}
              alt={selectedHousing.host.name}
            />
          </S.Host>
          {/* <S.Rating> */}
          {/* creer le composant Etoile pour la notation */}
          {/* </S.Rating> */}
        </S.Layout3>
      </S.Layout1>
      <S.Layout4>
        <Collapse
          title="Description"
          description={selectedHousing.description}
          isOpen={false}
        ></Collapse>
        <Collapse
          title="Equipements"
          description={selectedHousing.equipments.map((equipment, index) => (
            <p key={index}>{equipment}</p>
          ))}
          isOpen={false}
        ></Collapse>
      </S.Layout4>
    </>
  );
}

Housing.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Housing;
