import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import SearchBar from "./components/SearchBar/SearchBar";
import PokemonList from "./components/PokemonList/PokemonList";

import pokeNames from "./assets/pokeData";

const _API_URL = "https://pokeapi.co/api/v2/pokemon/";

const requests = pokeNames.map((name) => {
  return axios.get(_API_URL + name);
});

const App = () => {
  // Pokemon Object Array
  const [myPokemon, setMyPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const changeInput = (event) => {
    setSearchTerm(event.target.value);
  };
  const addPokemon = (event) => {
    event.preventDefault();
    axios
      .get(_API_URL + searchTerm.toLowerCase())
      .then((res) => {
        if (res.data.name)
        setMyPokemon([...myPokemon, res.data]);
        else return;
      })
      .catch((err) => {
        alert("No results found!");
      });
    setSearchTerm("");
  };
  const closeHandler = (event) => {
    setMyPokemon(myPokemon.filter(x => {
      return x.id != event.target.id;
    }));
  }

  // Axios API Pull

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
        alert(`ERROR`);
      });
  }, []);

  return (
    <StyledApp className="App">
      <SearchBar
        addPokemon={addPokemon}
        changeInput={changeInput}
        searchTerm={searchTerm}
      />
      <PokemonList myPokemon={myPokemon} closeHandler={closeHandler} />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export default App;
