import { useState } from "react";
import { Formik, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import styled from "styled-components";
import { BsPerson, BsLock } from "react-icons/bs";
import { StyledForm } from "../components/styled/StyledForm";
import { StyledInput } from "../components/styled/StyledInput";
import { HOME_PATH, REGISTER_PATH } from "../routes/routeConsts";
import { StyledError, StyledLabelWrapper } from "./Register";
import { LoginUser } from "../API/User";

const RegisterWrapper = styled.div`
  margin-top: 0.7;
  display: flex;
  flex-direction: column;
  align-items: center;

  h5 {
    margin: 10px;
  }

  a {
    align-self: center;
  }
`;

const Error = styled.p`
  color: red;
`;

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleSubmit = async (values) => {
    try {
      const response = await LoginUser(values);

      setError(
        !response ? "User email or pasword is incorrect" : navigate(HOME_PATH)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="loginBackground">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={() =>
          Yup.object({
            email: Yup.string().required("Required"),
            password: Yup.string().required("Required"),
          })
        }
      >
        <StyledForm>
          <h1>Login</h1>

          <StyledLabelWrapper>
            <label htmlFor="email">Email</label>
            <StyledError name="email" component="div" />
          </StyledLabelWrapper>

          <StyledInput>
            <BsPerson />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="Type your email"
            />
          </StyledInput>

          <StyledLabelWrapper>
            <label htmlFor="password">Password</label>
            <StyledError name="password" component="div" />
          </StyledLabelWrapper>
          <StyledInput>
            <BsLock />
            <Field
              label="Password"
              name="password"
              type="password"
              placeholder="Type your password"
            />
          </StyledInput>
          <Link>Forgot password?</Link>
          {error && <Error>{error}</Error>}
          <button type="submit">LOGIN</button>
          <RegisterWrapper>
            <h5>or</h5>
            <Link to={REGISTER_PATH}>Register</Link>
          </RegisterWrapper>
        </StyledForm>
      </Formik>
    </div>
  );
};

export default Login;
