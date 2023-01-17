import styled from "styled-components";

export const Label = styled.label`
  padding: 6px;
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;

  @media (max-width: 767px) {
    grid-template-columns: auto;
  }
`;

export const Input = styled.input`
  padding: 10px;
  margin: 0;
  border-radius: 4px;
  flex-basis: 100%;
`;

export const Select = styled.select`
  padding: 12px;
  border-radius: 4px;
  border-width: 2px;
`;

export const Title = styled.span`
  font-weight: 700;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
