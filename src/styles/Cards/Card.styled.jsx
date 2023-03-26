import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 210px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.5s;
  background: #91317499;

  &:hover,
  &:focus {
    transform: scale(1.03);
    background: #cd5889af;
  }

  &:active {
    transform: translateY(4px);
    background: #cd588976;
  }
`;

export default StyledCard;
