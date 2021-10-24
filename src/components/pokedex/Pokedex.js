import axios from "axios";
import { useEffect, useState } from "react";
import PokedexScreen from "../pokedexscreen/PokedexScreen";
import PokemonForm from "../pokemonform/PokemonForm";
import "./pokedex.css";

const Pokedex = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});
  const RandomId = Math.floor(Math.random() * 806 + 1);
  // Inicamos con ID random para siempre tener un pokemón
  const [pokemonID, setPokemonId] = useState(RandomId);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
      .then(function (response) {
        console.log(response.data);
        setPokemon(response.data);
        setLoading(false);
        setError(false);
      })
      .catch(function (error) {
        console.error();
        setError(true);
        setLoading(false);
      });
  }, [pokemonID]);

  return (
    <div className="pokedex">
      <div className="pokedex-left">
        <div className="pokedex-left-top">
          <div className={`light is-sky is-big ${loading && "is-animated"}`} />
          <div className="light is-red" />
          <div className="light is-yellow" />
          <div className="light is-green" />
        </div>
        <div className="pokedex-screen-container">
          <PokedexScreen pokemon={pokemon} loading={loading} />
        </div>
        <div className="pokedex-left-bottom">
          <div className="pokedex-left-bottom-lights">
            <div className="light is-blue is-medium" />
            <div className="light is-green is-large" />
            <div className="light is-orange is-large" />
          </div>
          <PokemonForm
            setPokemonId={setPokemonId}
            setLoading={setLoading}
            setError={setError}
          />
        </div>
      </div>
      <div className="pokedex-right-front" />
      <div className="pokedex-right-back" />
    </div>
  );
};

export default Pokedex;
