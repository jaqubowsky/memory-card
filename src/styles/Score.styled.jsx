import styled from "styled-components";

const StyledScore = styled.div`
  text-align: center;
  color: ${(props) => props.color};
`;

const StyledScoreWrapper = styled.div`
  gap: 5em;
  display: flex;
`;

export { StyledScore, StyledScoreWrapper };
