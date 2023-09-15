import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsPerson, BsLock, BsArrowRepeat } from "react-icons/bs";
import { StyledForm } from "../components/styled/StyledForm";
import { StyledInput } from "../components/styled/StyledInput";
import { RegUser } from "../API/User";
import { LOGIN_PATH } from "../routes/routeConsts";

export const StyledError = styled(ErrorMessage)`
  font-size: 0.7rem;
  color: red;
  margin-left: 1rem;
`;

export const StyledLabelWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const { email, password } = values;
      const newUser = { id: Date.now(), email, password };
      await RegUser(newUser);
      navigate(LOGIN_PATH);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="loginBackground">
      <Formik
        initialValues={{ email: "", password: "", RepeatPassword: "" }}
        onSubmit={handleSubmit}
        validationSchema={() =>
          Yup.object({
            email: Yup.string().required("Required").email(),
            password: Yup.string().required("Required").min(8),
            RepeatPassword: Yup.string()
              .required("Required")
              .oneOf([Yup.ref("password")], "Passwords do not match"),
          })
        }
      >
        <StyledForm>
          <h1>Register</h1>
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

          <StyledLabelWrapper>
            <label htmlFor="password">Repeat password</label>
            <StyledError name="RepeatPassword" component="div" />
          </StyledLabelWrapper>
          <StyledInput>
            <BsArrowRepeat />
            <Field
              label="Repeat password"
              name="RepeatPassword"
              type="password"
              placeholder="Repeat your password"
            />
          </StyledInput>

          <button type="submit">REGISTER</button>
        </StyledForm>
      </Formik>
    </div>
  );
};

export default Register;
