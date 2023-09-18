import styled from "styled-components";

export const StyledButton = styled.button`
  font-weight: 900;
  font-size: 1rem;
  width: 150px;
  padding: 5px;
  border: none;
  border-radius: 15px;
  color: blue;
  background-color: red;
  transition: all 200ms ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
