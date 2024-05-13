import { PokeTypes } from "../utils/BackgroundsByType";

export type PokeType = {
    name: PokeTypes | null;
    url?: string;
}

export type AllPokemonsResult = {
    name: string;
    url?: string;
}

export type PokemonByTypeResult = {
    pokemon: {
        name: string;
        url?: string;
    }
}


