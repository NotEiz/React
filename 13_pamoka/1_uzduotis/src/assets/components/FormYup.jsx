import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i;

const feedbackSchema = Yup.object({
  name: Yup.string().required().min(3, "min 3 chars"),
  email: Yup.string().required().matches(regex, "Invalid email address"),
  feedback: Yup.string().required(),
});

const FormYup = () => {
  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", feedback: "" }}
        onSubmit={async (values, formikHelpers) => {
          alert("Feedback was successfully sent");
          formikHelpers.resetForm();
        }}
        validationSchema={feedbackSchema}
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

export default FormYup;
