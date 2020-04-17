import styled from "styled-components";

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
  input {
    padding: 2px 1px;
  }
}
`;

export default SearchBar;