import { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const API = "http://localhost:3000/animals";

const animalFormScheme = Yup.object({
  name: Yup.string()
    .required()
    .min(3, "gyvuno vardas gali buti is daugiau nei 3 raidziu"),
  breed: Yup.string().required(),
  age: Yup.number().required().min(1),
});

const fetchAnimals = async () => {
  const response = await axios.get(API);
  return response.data;
};

const createAnimal = async (animal) => {
  const response = await axios.post(API, animal);
  return response.data;
};

const AnimalAddForm = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetchAnimals()
      .then((resp) => setAnimals(resp))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Formik
        initialValues={{ name: "", breed: "", age: "" }}
        onSubmit={async (values, formikHelpers) => {
          try {
            const newAnimal = {
              id: Date.now(),
              name: values.name,
              veisle: values.breed,
              metai: values.age,
            };
            const response = await createAnimal(newAnimal);
            setAnimals((prevAnimals) => [...prevAnimals, response]);
            formikHelpers.resetForm();
          } catch (error) {
            console.error(error);
          }
        }}
        validationSchema={animalFormScheme}
      >
        <Form>
          <Field name="name" placeholder="Name..." type="text" />
          <ErrorMessage name="name" component="div" />

          <Field name="breed" placeholder="Breed" type="text" />
          <ErrorMessage name="breed" component="div" />

          <Field name="age" placeholder="Age..." type="number" />
          <ErrorMessage name="age" component="div" />
          <button type="submit">ADD ANIMAL</button>
        </Form>
      </Formik>

      <div className="animalsWrapper">
        {animals.map((animal) => (
          <div key={animal.id}>
            <h1>{animal.name}</h1>
            <p>{animal.veisle}</p>
            <p>{animal.metai}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AnimalAddForm;
