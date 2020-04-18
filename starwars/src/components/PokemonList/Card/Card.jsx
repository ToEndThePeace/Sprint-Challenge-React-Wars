import React from "react";
import styled from "styled-components";

import Head from "./Head/Head";
import Info from "./Info/Info";
import Stats from "./Stats/Stats";

export default function Card(props) {
  const { info, closeHandler } = props;

  if (info) return (
    <StyledCard className="Card">
      <Head
        name={info.name}
        id={info.id}
        sprite={info.sprites.front_default}
        closeHandler={closeHandler}
      />
      <Info types={info.types} abilities={info.abilities} />
      <Stats stats={info.stats} />
    </StyledCard>
  );
  else return <StyledCard noborder />;
}

const StyledCard = styled.div`
  width: 300px;
  margin: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px #000;
  border-radius: 7px  7px 5px 5px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  border: ${(props) => props.noborder ? "none" : "2px solid #000"};
`;