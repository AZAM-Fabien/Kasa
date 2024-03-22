import * as React from "react";
import PropTypes from "prop-types";
import * as S from "./Collapse.style";

const Collapse = (props) => {
  const [isOpen, setIsOpen] = React.useState(props.isOpen);
  const [maxHeight, setMaxHeight] = React.useState(0);
  const contentRef = React.useRef(null);
  const toggleIsOpen = () => setIsOpen(!isOpen);

  React.useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  }, [isOpen, contentRef]);

  const arrowImage = "src/assets/arrow.svg";
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
        <S.Description
          style={{ maxHeight: `${maxHeight}px` }}
          isOpen={isOpen}
          ref={contentRef} // Appliquez la ref ici pour mesurer la hauteur
        >
          <S.TextDescription>{props.description}</S.TextDescription>
        </S.Description>
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
