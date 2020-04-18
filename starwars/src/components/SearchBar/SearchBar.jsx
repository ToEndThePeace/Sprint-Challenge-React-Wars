import React from "react";
import styled from "styled-components";

function SearchBar(props) {
  const { addPokemon, changeInput, searchTerm } = props;
  return (
    <Header className="SearchBar">
      <h1><W>Poke</W>dex</h1>
      <form name="searchBar" onSubmit={addPokemon}>
        <input
          name="searchBar"
          placeholder="Enter name or ID here..."
          onChange={changeInput}
          value={searchTerm}
        />
        <input
          type="submit"
          name="submit"
          value="Search"
        />
      </form>
    </Header>
  )
}

const Header = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, .3);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 15vh;
  padding: 10px 40px;
  position: sticky;
  top: 0;
  z-index: 3;
  h1 {
    font-family: "Pocket Monk";
    color: #B22;
    -webkit-text-stroke: .4px #000;
    font-size: 5rem;
    letter-spacing: .1rem;
    text-shadow: 0 0 5px #000;
  }
  form {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    input {
      padding: 2px 1px;
      font-family: "Roboto", sans-serif;
      background-color: #FFF;
      border: 2px solid #B22;
      color: #000;
      padding: 10px 20px;
      margin: 10px;
      border-radius: 30px;
      box-shadow: 0 0 5px #000;
      &:last-child:hover {
        cursor: pointer;
      }
    }
  }
`
const W = styled.span`
  color: #fff;
`

export default SearchBar;