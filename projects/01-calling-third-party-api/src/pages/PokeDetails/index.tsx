import { useParams } from "react-router-dom";
import { usePokemon } from "../../hooks/usePokemon";
import { PokemonDetails } from "../../Components/PokemonDetails";

export const PokeDetails = () => {
  const { pokeId } = useParams();
  const { pokemon } = usePokemon("", pokeId);

  return <PokemonDetails pokemon={pokemon!} />;
};