import { Formik, Form, Field, ErrorMessage } from "formik";

const checkEmail = (str) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i;
  return regex.test(str);
};

const FeedbackForm = () => {
  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", feedback: "" }}
        onSubmit={async (values, formikHelpers) => {
          alert("Feedback was successfully sent");
          formikHelpers.resetForm();
        }}
        validate={(values) => {
          const errors = {};

          if (!values.name) {
            errors.name = "Name is required";
          } else if (values.name.length < 3) {
            errors.name = "Name is too short";
          }

          if (!values.email) {
            errors.email = "Email is required";
          } else if (checkEmail(values.email)) {
            errors.email = "Invalid email  address";
          }

          if (!values.feedback.length < 0) {
            errors.feedback = "you must write something";
          }

          return errors;
        }}
      >
        <Form id="formWrapper">
          <Field name="name" placeholder="Enter name" type="text" />
          <ErrorMessage name="name" component="div" />
          <Field name="email" placeholder="Enter email" type="email" />
          <ErrorMessage name="email" component="div" />
          <textarea
            name="feedback"
            cols="15"
            rows="5"
            placeholder="Enter feetback"
          ></textarea>
          <ErrorMessage name="feedback" component="div" />
          <button type="submit">Send</button>
        </Form>
      </Formik>
    </>
  );
};

export default FeedbackForm;
