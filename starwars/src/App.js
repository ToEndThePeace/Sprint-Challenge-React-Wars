import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import SearchBar from "./components/SearchBar/SearchBar";

import "./App.css";

import pokeNames from "./assets/pokeData";

const _API_URL = "https://pokeapi.co/api/v2/pokemon/";

const App = () => {
  const [myPokemon, setMyPokemon] = useState([]);

  // Axios API Pull
  const requests = pokeNames.map((x) => {
    return axios.get(_API_URL + x);
  });

  const newData = [];

  useEffect(() => {
    axios
      .all(requests)
      .then(
        axios.spread((...responses) => {
          responses.forEach((res) => {
            newData.push(res.data);
          });
          setMyPokemon(newData);
        })
      )
      .catch((err) => {
        alert(`ERROR ${err.response.status}: ${err.response.statusText}`);
      });
  }, []);

  return (
    <div className="App">
      <SearchBar>
        <h1>Pokedex</h1>
        <label name="searchBar">
          Search:&nbsp;
          <input
            name="searchBar"
            placeholder="Enter name or ID here..."
          />
          <input
            type="submit"
            name="submit"
          />
        </label>
      </SearchBar>
      <PokemonList myPokemon={myPokemon} />
    </div>
  );
};

function PokemonList(props) {
  const { myPokemon } = props;
  return (
    <div className="PokemonList">
      {myPokemon.map((x, i) => {
        return <Card info={x} key={i} />;
      })}
    </div>
  );
}

function Card(props) {
  const { info } = props;

  return (
    <div className="Card">
      <Head name={info.name} id={info.id} sprite={info.sprites.front_default} />
      <Info types={info.types} stats={info.stats} abilities={info.abilities} />
    </div>
  );
}

function Head(props) {
  const { name, id, sprite } = props;
  return (
    <div className="Head">
      <div className="crop">
        <img src={sprite} alt={`${name}'s default sprite`} />
      </div>
      <h2>{name}</h2>
      <h3>{`#${id}`}</h3>
    </div>
  );
}
function Info(props) {
  const { types, stats, abilities } = props;

  return (
    <div className="Info">
      <Types types={types} />
      <Abilities abilities={abilities} />
      <Stats stats={stats} />
    </div>
  );
}
function Types(props) {
  const { types } = props;

  return (
    <div className="Types flexy">
      <span>Type:</span>&nbsp;
      {types.map((x) => {
        return <Type key={x.slot} type={x.type.name} />;
      })}
    </div>
  );
}
function Type(props) {
  const { type } = props;
  return <div className="Type">{type}</div>;
}

function Abilities(props) {
  const { abilities } = props;
  let abilityInfo = [];

  return (
    <div className="Abilities flexy">
      <span>Abilities:</span>&nbsp;
      {abilities.map((x, i) => {
        return <Ability ability={x.ability} key={i} />;
      })}
    </div>
  );
}
function Ability(props) {
  const { ability } = props;
  return <div className="Ability">{ability.name.replace(/-/g," ")}</div>;
}

function Stats(props) {
  const { stats } = props;

  return (
    <div className="Stats">
      <h4>Base Stats:</h4>
      {stats.map((x, i) => {
        return <Stat stat={x} key={i} />;
      })}
    </div>
  );
}
function Stat(props) {
  const {stat} = props;
  const name = stat.stat.name;
  const newName = name === "speed"           ? "speed"           :
                  name === "special-defense" ? "special defense" :
                  name === "special-attack"  ? "special attack"  : 
                  name === "hp"              ? "hit points"      :
                  name === "attack"          ? "attack"          :
                                               "defense"         ;

  return (
    <div className="Stat">
      <h5>{newName}&nbsp;</h5>
      <Dots />
      <h6>&nbsp;&nbsp;{stat.base_stat}</h6>
    </div>
  )
}
function Dots(props) {
  return (
    <span className="Dots">...................................................................................................</span>
  )
}

export default App;
