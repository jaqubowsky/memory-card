import { PropTypes } from "prop-types";
import { StyledScoreWrapper } from "../../styles/Score.styled";

function ScoreWrapper({ children }) {
  return <StyledScoreWrapper>{children}</StyledScoreWrapper>;
}

ScoreWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScoreWrapper;
