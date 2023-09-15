import styled from "styled-components";
import { Form } from "formik";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: 400px;
  margin: 0 auto;
  transform: translateY(-100px);
  background-color: white;
  padding: 3rem;

  h1 {
    margin: 0 0 2rem 0;
    align-self: center;
  }

  a {
    font-size: 0.8rem;
    align-self: flex-end;
    color: gray;
    &:hover {
      transform: none;
    }
  }

  button {
    margin-top: 1rem;
    border: none;
    padding: 0.7rem 1rem;
    border-radius: 10px;
    font-weight: 800;

    &:hover {
      cursor: pointer;
    }
  }
`;
