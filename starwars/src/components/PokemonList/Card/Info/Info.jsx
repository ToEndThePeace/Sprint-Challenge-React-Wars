import React from "react";
import styled from "styled-components";

export default function Info(props) {
  const { types, abilities } = props;

  return (
    <StyledInfo className="Info">
      <InfoSection className="Types">
        <h4>Type:</h4>
        {types.map((x) => {
          return (
            <div className="Type" key={x.slot}>{x.type.name}</div>
          )
        })}
      </InfoSection>
      <InfoSection className="Abilities">
        <h4>Abilities:</h4>
        {abilities.map((x, i) => {
          return (
            <div className="Ability" key={i}>
              {x.ability.name.replace(/-/, " ")}
            </div>
          );
        })}
      </InfoSection>
    </StyledInfo>
  );
}
const StyledInfo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  flex-grow: 1;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-transform: capitalize;
  font-size: 1rem;
  padding: 7px 15px 0;
  h4 {
    border-bottom: 1px solid #000;
    line-height: 1.62rem;
    letter-spacing: .04rem;
    font-weight: 600;
    margin-bottom: 5px;
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    font-size: 1.2rem;
  }
  div {
    padding: 0 0 5px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
  }
`;