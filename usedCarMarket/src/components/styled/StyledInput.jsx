import styled from "styled-components";

export const StyledInput = styled.div`
  width: 100%;
  display: flex;
  padding: 0.7rem;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  input {
    margin-left: 1rem;
    border: none;
    font-weight: 700;

    &:focus {
      outline: none;
    }
  }

  svg {
    font-size: 1.5rem;
  }
`;
