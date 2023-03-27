import { PropTypes } from "prop-types";
import { StyledScore } from "../../styles/Score.styled";

function Score({ name, score }) {
  return (
    <StyledScore>
      <h2>
        {name} {score}
      </h2>
    </StyledScore>
  );
}

Score.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Score;
