import { useState, useEffect } from "react";
import axios from "axios";
import { capitalize } from "../utils";

const usePokemonData = (url) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let timer;
    const TIMEOUT = 1000;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url);
        const fetchedPokemonData = response.data.results;

        const organisedPokemonData = await Promise.all(
          fetchedPokemonData.map(async (pokemon) => {
            const resp = await axios.get(pokemon.url);
            const data = {
              name: capitalize(resp.data.name),
              img: resp.data.sprites.front_default,
              id: resp.data.id,
            };
            return data;
          }),
        );
        setPokemonData(organisedPokemonData);
      } catch (err) {
        setError(err);
      } finally {
        timer = setTimeout(() => {
          setIsLoading(false);
        }, TIMEOUT);
      }
    };
    fetchData();
    return () => clearTimeout(timer);
  }, [url]);

  return { pokemonData, error, isLoading };
};

export default usePokemonData;
