import { createContext, useEffect, useState } from "react";
import { AllPokemonsResult, PokeType, PokemonByTypeResult } from "../interfaces/types";
import axios from "axios";

interface ContextProps {
    types: PokeType[];
    filterSelected: PokeType;
    pokemonsFiltered: string[] | null;
    changeTypeSelected: (type: PokeType) => void;
}

export const PokemonContext = createContext<ContextProps>({} as ContextProps);

const PokemonProvider = ({ children }: any) => {
    const allPokemonsUrl = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";
    const defaulState: PokeType = {
        name: "All" || null,
        url: allPokemonsUrl
    };

    const [allPokemons, setAllPokemons] = useState(null);
    const [pokemonsFiltered, setPokemonsFiltered] = useState(null);

    const [types, setTypes] = useState([defaulState]);
    const [filterSelected, setFilterSelected] = useState(defaulState);

    const changeTypeSelected = async (type: PokeType) => {
        setFilterSelected(type);
        
        const { data } = await axios.get(type?.url!);
        const pokemons = data.results?.map(({ pokemon }: PokemonByTypeResult) => {
            return pokemon?.url;
        });

        type.name === "All" ? setPokemonsFiltered(allPokemons) : setPokemonsFiltered(pokemons);
    }

    const getPokemonsType = async () => {
        const { data } = await axios.get("https://pokeapi.co/api/v2/type");
        setTypes({...types, ...data.results});
    }

    const getAllPokemons = async () => {
        const { data } = await axios.get(allPokemonsUrl);

        const pokemons = data.results?.map((pokemon: AllPokemonsResult) => {
            return pokemon?.url;
        });

        setAllPokemons(pokemons);
        setPokemonsFiltered(pokemons);
    }

    useEffect(() => {
        getPokemonsType();
        getAllPokemons();
    }, [])
    

    return (
        <PokemonContext.Provider value={{types, filterSelected, pokemonsFiltered, changeTypeSelected}}>
            {children}
        </PokemonContext.Provider>
    );
}

export default PokemonProvider;