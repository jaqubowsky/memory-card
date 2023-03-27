import { useState, useEffect } from "react";
import usePokemonData from "../hooks/usePokemonData";
import Loader from "./Loader/Loader";
import { Card, CardContainer } from "./Cards";
import StyledMain from "../styles/Main.styled";
import { randomiseArray } from "../utils/index";

function Main() {
  const [pickedPokemons, setPickedPokemons] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const POKEMON_LIMIT = "12";

  const addPickedPokemon = (pokemonId) => {
    setPickedPokemons((prevPokemon) => {
      if (prevPokemon.includes(pokemonId)) {
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

    const pokemonObject = randomisedPokemonData.map((pokemon) => (
      <Card
        handleClick={(e) => addPickedPokemon(e.currentTarget.id)}
        name={pokemon.name}
        img={pokemon.img}
        key={pokemon.id}
        id={pokemon.id}
      />
    ));

    return (
      <StyledMain>
        <CardContainer>{isLoading ? <Loader /> : pokemonObject}</CardContainer>
      </StyledMain>
    );
  }

  return <div>{error}</div>;
}

export default Main;
