import { useEffect, useState } from "react";
import { DeleteCar, FetchCars } from "../API/Cars";
import { StyledHomePage } from "../components/styled/StyledHomePage";
import { StyledCarCard } from "../components/styled/StyledCarCard";
import { StyledButton } from "../components/styled/StyledButton";
import styled from "styled-components";

const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 1rem;
`;

const Home = () => {
  const [cars, setCars] = useState([]);
  console.log(cars);
  useEffect(() => {
    FetchCars()
      .then((response) => setCars(response))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await DeleteCar(id);
      setCars((prevCars) => prevCars.filter((car) => car.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginBackground">
      <StyledHomePage>
        <h2>
          Naudoti automobiliai <span className="carCount">({cars.length})</span>
        </h2>
        <div>
          {cars.map((car) => (
            <StyledCarCard key={car.id}>
              <img src={car.image} alt={`${car.brand} ${car.make}`} />
              <div className="innerWrapper">
                <div className="inner">
                  <div>
                    <h3 className="blueText">
                      {car.brand} {car.make}
                    </h3>
                    <span>
                      <p className="sideBorder">
                        {car.year}-{car.month}
                      </p>
                      <p>{car.bodyType}</p>
                    </span>
                  </div>

                  <h2 className="blueText">{car.price}$</h2>
                </div>
                <div className="moreInfo">
                  <p className="sideBorder">{car.fuelType}</p>
                  <p className="sideBorder">{car.transmision}</p>
                  <p className="sideBorder">
                    {car.liters}L, {car.power}KW
                  </p>
                  <p className="sideBorder">{car.kilometers}</p>
                  <p>{car.city}</p>
                </div>
                <ButtonDiv>
                  <StyledButton onClick={() => handleDelete(car.id)}>
                    Delete
                  </StyledButton>
                </ButtonDiv>
              </div>
            </StyledCarCard>
          ))}
        </div>
      </StyledHomePage>
    </div>
  );
};

export default Home;
