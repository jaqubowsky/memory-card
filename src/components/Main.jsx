import { useState, useEffect } from "react";
import usePokemonData from "../hooks/usePokemonData";
import Loader from "./Loader/Loader";
import { Card, CardContainer } from "./Cards";
import Score from "./Scoreboard/Score";
import ScoreWrapper from "./Scoreboard/ScoreWrapper";
import StyledMain from "../styles/Main.styled";
import { randomiseArray } from "../utils/index";

const POKEMON_LIMIT = "12";

function Main() {
  const [, setPickedPokemons] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const updateBestScore = () => {
    if (currentScore > bestScore) {
      localStorage.setItem("bestScore", currentScore);
      setBestScore(currentScore);
    }
  };

  useEffect(() => {
    const storedBestScore = JSON.parse(localStorage.getItem("bestScore"));
    setBestScore(storedBestScore || 0);
  }, []);

  const addPickedPokemon = (pokemonId) => {
    setPickedPokemons((prevPokemon) => {
      if (prevPokemon.includes(pokemonId)) {
        updateBestScore();
        setCurrentScore(0);
        return [];
      }

      return [...prevPokemon, pokemonId];
    });
    setCurrentScore((prevScore) => prevScore + 1);
  };

  const { pokemonData, isLoading, error } = usePokemonData(
    `https://pokeapi.co/api/v2/pokemon/?limit=${POKEMON_LIMIT}`,
  );

  if (pokemonData !== null) {
    const randomisedPokemonData = randomiseArray(pokemonData);

    const pokemonObject = randomisedPokemonData.map(({ id, name, img }) => (
      <Card handleClick={() => addPickedPokemon(id)} name={name} img={img} key={id} id={id} />
    ));

    return (
      <StyledMain>
        <ScoreWrapper>
          <Score name="Current score:" score={currentScore} />
          <Score name="Best score:" score={bestScore} />
        </ScoreWrapper>
        <CardContainer>{isLoading ? <Loader /> : pokemonObject}</CardContainer>
      </StyledMain>
    );
  }

  return <div>{error}</div>;
}

export default Main;
