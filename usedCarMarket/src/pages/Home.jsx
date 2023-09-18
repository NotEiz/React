import { useEffect, useState } from "react";
import { FetchCars } from "../API/Cars";
import { StyledHomePage } from "../components/styled/StyledHomePage";
import { StyledCarCard } from "../components/styled/StyledCarCard";

const Home = () => {
  const [cars, setCars] = useState([]);
  console.log(cars);
  useEffect(() => {
    FetchCars()
      .then((response) => setCars(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
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
                      <p className="sideBorder">{car.year}</p>
                      <p>{car.bodyType}</p>
                    </span>
                  </div>

                  <h2 className="blueText">{car.price}$</h2>
                </div>
                <div className="moreInfo">
                  <p className="sideBorder">{car.fuelType}</p>
                  <p className="sideBorder">{car.transimision}</p>
                  <p className="sideBorder">
                    {car.liters}L, {car.power}KW
                  </p>
                  <p className="sideBorder">{car.kilometers}</p>
                  <p>{car.city}</p>
                </div>
              </div>
            </StyledCarCard>
          ))}
        </div>
      </StyledHomePage>
    </>
  );
};

export default Home;
