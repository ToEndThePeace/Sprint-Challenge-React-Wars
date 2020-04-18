import React from "react";
import styled from "styled-components";

export default function Head(props) {
  const { name, id, sprite, closeHandler } = props;
  return (
    <StyledHead className="Head">
      <img src={sprite} alt={`${name}'s default sprite`} />
      <div className="flex-vert">
        <h2>{name}</h2>
        <h3>{`#${id}`}</h3>
      </div>
      <div 
        className="close-button"
        onClick={closeHandler}
        id={id}
      >&times;</div>
    </StyledHead>
  );
}

const StyledHead = styled.div`
  background-color: #B22;
  color: #FFF;
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  padding: 5px;
  border-radius: 5px 5px 0 0;
  border-bottom: 2px solid #000;
  font-family: "Roboto", sans-serif;
  position: relative;
  .flex-vert {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    flex-grow: 1;
    padding: 5px;
    h2 {
      text-align: left;
      text-transform: capitalize;
      font-size: 2rem;
      font-weight: 900;
    }
    h3 {
      font-weight: 900;
      font-size: 1rem;
    }
  }
  img {
    height: 85px;
    width: 85px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 0 5px #000;
    margin: 5px;
    border-radius: 5px 5px 5px 0;
    border: 1px solid #000;
  }
  .close-button {
    position: absolute;
    top: 3px;
    right: 8px;
    font-size: 1.5rem;
    line-height: 1.5rem;
    cursor: pointer;
    &:hover {
      text-shadow: 0 0 3px #000;
      color: #eee;
    }
  }
`;
