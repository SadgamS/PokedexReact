import React from "react";

function Stats({ item }) {
  return (
    <div>
      <li className="pokemon-stat">
        <span className="stat-name">
          <b>{item.stat.name}: </b>
        </span>
        <span>{item.base_stat}</span>
      </li>
    </div>
  );
}

export default Stats;
