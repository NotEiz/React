import { Formik, Form, Field, ErrorMessage } from "formik";

const checkEmail = (str) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regex.test(str);
};

const Forma = () => {
  return (
    <>
      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={async (values, formikHelpers) => {
          alert("Successfully submitted form");
          formikHelpers.resetForm();
        }}
        validate={(values) => {
          const errors = {};

          if (!values.name) {
            errors.name = "Name is required";
          } else if (values.name.length < 3) {
            errors.name = "Name is too short. Minimum 3 chars";
          }

          if (!values.email) {
            errors.email = "Email is required";
          } else if (!checkEmail(values.email)) {
            errors.email = "Invalid email address";
          }

          return errors;
        }}
      >
        <Form>
          <Field name="name" placeholder="Name..." type="text" />
          <ErrorMessage name="name" component="div" />
          <br />
          <Field name="email" placeholder="Email..." type="email" />
          <ErrorMessage name="email" component="div" />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </>
  );
};

export default Forma;
