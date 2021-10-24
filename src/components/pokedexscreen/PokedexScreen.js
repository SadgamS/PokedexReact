import React from "react";
import Stats from "../stats/Stats";

function PokedexScreen(props) {
  if (props.loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="pokedex-screen">
      <div className="pokemon-info">
        <h2 className="pokemon-name">{props.pokemon.name}</h2>
        <img
          className="pokemon-img"
          src={props.pokemon.sprites.front_default}
          alt={props.pokemon.name}
        />
        <ul className="pokemon-stats">
          {props.pokemon.stats.map((item) => (
            <Stats key={item.stat.name} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PokedexScreen;
