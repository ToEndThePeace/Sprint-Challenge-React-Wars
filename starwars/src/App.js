import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

import pokemon from "./assets/pokeData";

const App = () => {
  const [myPokemon, setMyPokemon] = useState([]);

  return (
    <div className="App">
      <SearchBar>
        <h1>Pokedex</h1>
        <label name="searchBar">
          Search:&nbsp;
          <input
            name="searchBar"
            placeholder="Enter name or ID here..."
          ></input>
        </label>
      </SearchBar>
      <PokemonList />
    </div>
  );
};



const SearchBar = styled.div`
  width: 100%;
  height: 20vh;
  background: rgba(220, 220, 220, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: "Pocket Monk";
    color: yellow;
    -webkit-text-stroke: 1px blue;
    font-size: 5rem;
  }
  label {
    font-size: 1rem;
    font-weight: 600;
  }
`;
const PokemonList = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: 80vh;
  margin: 0 auto;
  background-color: rgba(220, 220, 220, 0.2);
`;

export default App;
