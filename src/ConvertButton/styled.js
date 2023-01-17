import styled from "styled-components";

export const Button = styled.button`
  background-color: #2a3a4c;
  margin: auto;
  width: 100%;
  color: #ffffff;
  padding: 18px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: hsl(212, 29%, 43%);
  }

  &:active {
    background-color: hsl(212, 29%, 63%);
  }
`;
