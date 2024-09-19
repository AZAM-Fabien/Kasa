import { housingList } from "/src/Datas/Housing.js";
import PropTypes from "prop-types";
import Slider from "/src/components/Slider/Slider.jsx";
import * as S from "./Housing.style";
import Collapse from "/src/components/Collapse/Collapse.jsx";
import Rating from "/src/components/Rating/Rating.jsx";

function Housing({ id }) {
  const selectedHousing = housingList.find((housing) => housing.id === id);

  return (
    <>
    <S.Main>
      <Slider imageSlider={selectedHousing.pictures} />
      <S.Layout1>
        <S.Layout2>
          <S.Title>{selectedHousing.title}</S.Title>
          <S.Location>{selectedHousing.location}</S.Location>
          <S.TagsList>
            {" "}
            {selectedHousing.tags.map((tags, index) => (
              <S.Tag key={index}> {tags} </S.Tag>
            ))}{" "}
          </S.TagsList>
        </S.Layout2>
        <S.Layout3>
          <S.Host>
            <S.HostSeparteName>
              <S.HostName>{selectedHousing.host.name.split(" ")[0]}</S.HostName>
              <S.HostName>{selectedHousing.host.name.split(" ")[1]}</S.HostName>
            </S.HostSeparteName>
            <S.HostPicture
              src={selectedHousing.host.picture}
              alt={selectedHousing.host.name}
            />
          </S.Host>
          <Rating rating={selectedHousing.rating}></Rating>
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
      </S.Main>
    </>
  );
}

Housing.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Housing;
