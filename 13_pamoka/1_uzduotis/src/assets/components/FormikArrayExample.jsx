import { Formik, Form } from "formik";

const FormikArrayExample = () => {
  return (
    <>
      <h2>Formik</h2>
      <Formik initialValues={{ name: "", traits: [] }}>
        <Form></Form>
      </Formik>
    </>
  );
};

export default FormikArrayExample;
