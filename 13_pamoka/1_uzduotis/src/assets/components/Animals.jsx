import axios from "axios";
import { useEffect, useState } from "react";

const fetchAnimals = async () => {
  const response = await axios.get("http://localhost:3000/animals");
  return response.data;
};

const Animals = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetchAnimals()
      .then((resp) => setAnimals(resp))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
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

export default Animals;
