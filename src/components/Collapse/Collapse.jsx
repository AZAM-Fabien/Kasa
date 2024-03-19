import * as React from "react";
import PropTypes from 'prop-types';
import * as S from "./Collapse.style";

const Collapse = (props) => {
  const [isOpen, setisOpen] = React.useState(props.isOpen);
  const toggleIsOpen = () => setisOpen(!isOpen);
  return (
    <>
      <S.Title onClick={() => toggleIsOpen()}>{props.title}</S.Title>

      {isOpen && <S.Description>{props.description}</S.Description>}
    </>
  );
};

Collapse.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // ...autres props
};

export default Collapse;
