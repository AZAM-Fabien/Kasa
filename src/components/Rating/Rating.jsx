import PropTypes from "prop-types";
import * as S from "./Rating.style";

const Rating = (props) => {
  const rating = parseInt(props.rating, 10); // permet de transformer une chaine de caractère en nombre (base 10)
  console.log(rating);

  return (
    // creer un nombre " rating " d'étoiles rouges et un nombre " 5 - rating " d'étoiles blanches   ... = opérateur de propagation il permet d'itérer sur un tableau
    <S.Rating>
      {[...Array(rating)].map((_, index) => (
        <S.ImgStar key={index} src={`/assets/StarRed.svg`} alt="etoile rouge" />
      ))}
      {[...Array(5 - rating)].map((_, index) => (
        <S.ImgStar key={5 - index} src={`/assets/Star.svg`} alt="etoile" />
      ))}
    </S.Rating>
  );
};

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Rating;
