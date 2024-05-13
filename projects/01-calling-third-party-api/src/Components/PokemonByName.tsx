import { useState } from "react";
import "../styles/PokemonByName.css";
import axios from "axios";
export const PokemonByName = () => {
  const [{ name, url }, setResponse] = useState({
    name: "",
    url: "",
  });

  const [{ nameAxios, urlAxios }, setResponseAxios] = useState({
    nameAxios: "",
    urlAxios: "",
  });

  const [pokemon, setPokemon] = useState("");
  const [pokemonAxios, setPokemonAxios] = useState("");

  const fetchPokeApi = async (url: string): Promise<any> => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPokeApiAxios = async (url: string): Promise<any> => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleFetchButtonClick = () => {
    fetchPokeApi(
      "https://pokeapi.co/api/v2/pokemon/" +
        `${pokemon.toLowerCase() || "incineroar"}`
    ).then((data) => {
      setResponse({
        name: data.name,
        url: data.sprites.front_default,
      });
    });
  };

  const handleAxiosButtonClick = () => {
    fetchPokeApiAxios(
      "https://pokeapi.co/api/v2/pokemon/" +
        `${pokemonAxios.toLowerCase() || "charizard"}`
    ).then((data) => {
      setResponseAxios({
        nameAxios: data.name,
        urlAxios: data.sprites.front_default,
      });
    });
  };

  return (
    <>
      <div className="row">
        <div className="column">
          <h1>FETCH</h1>
          <input
            type="text"
            style={{ margin: "10px", width: "100px" }}
            value={pokemon}
            onChange={(e) => setPokemon(e.target.value)}
          />
          <button
            style={{ backgroundColor: "yellow", color: "black" }}
            onClick={() => handleFetchButtonClick()}
          >
            Find Pokemon
          </button>
          <div className="card">
            <img
              style={{ width: "200px", height: "200px" }}
              src={url || "https://i.gifer.com/4xjS.gif"}
              alt="Pokemon"
            />
            <p>
              <strong>{name}</strong>
            </p>
          </div>
        </div>

        <div className="column">
          <h1>AXIOS</h1>
          <input
            type="text"
            style={{ margin: "10px", width: "100px" }}
            value={pokemonAxios}
            onChange={(e) => setPokemonAxios(e.target.value)}
          />
          <button
            style={{ backgroundColor: "yellow", color: "black" }}
            onClick={() => handleAxiosButtonClick()}
          >
            Find Pokemon
          </button>
          <div className="card">
            <img
              style={{ width: "200px", height: "200px" }}
              src={urlAxios || "https://i.gifer.com/4xjS.gif"}
              alt="Pokemon"
            />
            <p>
              <strong>{nameAxios}</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
