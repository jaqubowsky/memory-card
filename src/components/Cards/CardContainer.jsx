import { PropTypes } from "prop-types";
import StyledCardContainer from "../../styles/Cards/CardContainer.styled";

function CardContainer({ children }) {
  return <StyledCardContainer>{children}</StyledCardContainer>;
}

CardContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardContainer;
