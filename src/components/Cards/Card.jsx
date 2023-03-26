import StyledCard from "../../styles/Cards/Card.styled";

function Card({ name, img }) {
  return (
    <StyledCard>
      <img src={img} alt={name} />
      <h2>{name}</h2>
    </StyledCard>
  );
}

export default Card;
