import { PropTypes } from "prop-types";
import StyledCard from "../../styles/Cards/Card.styled";

function Card({ name, img, handleClick, id }) {
  return (
    <StyledCard onClick={handleClick} id={id}>
      <img src={img} alt={name} />
      <h2>{name}</h2>
    </StyledCard>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Card;
