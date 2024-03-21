import * as React from "react";
import PropTypes from "prop-types";
import * as S from "./Collapse.style";

const Collapse = (props) => {
  const [isOpen, setisOpen] = React.useState(props.isOpen);
  const toggleIsOpen = () => setisOpen(!isOpen);
  const arrowImage = "src/assets/arrow.svg"
  const arrowStyle = isOpen ? { transform: "scaleY(-1)" } : {};
  return (
    <>
    <S.Layout>
      <S.Container>
        <S.Title>{props.title}</S.Title>
        <S.Arrow
          onClick={() => toggleIsOpen()}
          src={arrowImage}
          alt="fleche"
          style={arrowStyle}
          />
      </S.Container>
      {isOpen && <S.Description>{props.description}</S.Description>}
      </S.Layout>
    </>
  );
};

Collapse.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Collapse;
