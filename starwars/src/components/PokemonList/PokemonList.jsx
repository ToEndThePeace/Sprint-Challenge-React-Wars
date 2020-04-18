import React from "react";
import styled from "styled-components";
import Card from "./Card/Card";

export default function PokemonList(props) {
  const { myPokemon, closeHandler } = props;
  return (
    <PageContent className="PokemonList">
      {myPokemon.map((aPokemon, i) => {
        return <Card info={aPokemon} key={i} closeHandler={closeHandler} />;
      })}
      <Card />
      <Card />
      <Card />
    </PageContent>
  );
}

const PageContent = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  min-height: 90vh;
`;