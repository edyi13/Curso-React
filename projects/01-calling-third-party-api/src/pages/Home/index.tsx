import { useContext } from "react";
import { PokemonList } from "../../Components/PokemonList";
import { PokeballIconSmall } from "../../assets/pokeball";
import { PokemonContext } from "../../context/PokemonContext";
import { Pagination } from "../../Components/Pagination";
import { usePagination } from "../../hooks/usePagination";
import styles from "./styles.module.scss";

export const Home = () => {
  const { pokemonsFiltered } = useContext(PokemonContext);
  const { page, nextPage, previousPage, backToHome } = usePagination();

  const perPage = 12;

  return (
    <div className={styles.home}>
      <header>
        <div onClick={backToHome}>
          <PokeballIconSmall />
          <span>Pokédex</span>
        </div>
      </header>
      <PokemonList page={page} perPage={perPage} pokemonsUrls={pokemonsFiltered} />
      <Pagination 
        page={page}
        perPage={perPage}
        nextPage={nextPage}
        previousPage={previousPage}
        maxItems={pokemonsFiltered?.length!}/>
    </div>
  );
};
