import React from "react";
import styled from "styled-components";

export default function Stats(props) {
  const { stats } = props;

  return (
    <StyledStats className="Stats">
      <h4>Base Stats:</h4>
      {stats.map((x, i) => {
        return <Stat stat={x} key={i} />;
      })}
    </StyledStats>
  );
}

function Stat(props) {
  const { stat } = props;
  const name =
    stat.stat.name === "hp"
      ? "health"
      : stat.stat.name.replace(/-/g, " ");

  return (
    <StatLine className="Stat">
      <h5>{name}</h5>
      <Dots />
      <h6>{stat.base_stat}</h6>
    </StatLine>
  )
}
function Dots(props) {
  return (
    <span className="Dots">...................................................................................................</span>
  )
}

const StatLine = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  font-size: 1rem;
  text-transform: capitalize;
  line-height: 1.2rem;
  * {
    font-weight: 400;
  }
  .Dots {
    flex: 1;
    overflow: hidden;
    line-height: 1.1rem;
    letter-spacing: .03rem;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    margin: 0 5px;
  }
  h5 {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
  }
  h6 {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
  }
`;
const StyledStats = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 5px 15px 10px;
  align-items: baseline;
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
`;