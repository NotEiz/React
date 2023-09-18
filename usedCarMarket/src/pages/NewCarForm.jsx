import { Formik, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import styled from "styled-components";
import { StyledForm } from "../components/styled/StyledForm";
import { StyledInput } from "../components/styled/StyledInput";
import { HOME_PATH } from "../routes/routeConsts";
import { StyledError, StyledLabelWrapper } from "./Register";
import { CreateNewCar } from "../API/Cars";

const YearSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 338px;

  div {
    display: flex;
  }

  .month {
    margin-left: 1rem;
    width: 42%;
  }
`;

const StyledTitle = styled.div`
  width: 100%;
  text-align: center;
`;

const StyledSelect = styled(Field)`
  padding: 0.5rem;
  width: 180px;
`;

// const ButtonDiv = styled.div`
//   grid-column: 4;
//   grid-row: 6;
//   width: 100%;
// `;

const StyledAddCarForm = styled(StyledForm)`
  display: flex;
  flex-flow: wrap row;
  width: 1100px;
  gap: 1rem;
  align-items: center;

  h1 {
    grid-row: 1;
    grid-column: 2;
    width: 100%;
  }
`;

const NewCarForm = () => {
  const navigate = useNavigate();

  const handleAddNewCar = async (values) => {
    try {
      await CreateNewCar(values);
      navigate(HOME_PATH);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginBackground">
      <Formik
        initialValues={{
          brand: "",
          color: "",
          make: "",
          year: 0,
          fuelType: "",
          transmision: "",
          liters: 0,
          power: 0,
          price: 0,
          city: "",
          kilometers: 0,
          bodyType: "",
          image: "",
          wheelsDrive: "",
        }}
        onSubmit={handleAddNewCar}
        validationSchema={() =>
          Yup.object().shape({
            brand: Yup.string(),
            color: Yup.string(),
            make: Yup.string().required("Required"),
            year: Yup.number(),
            month: Yup.number(),
            fuelType: Yup.string(),
            transmision: Yup.string(),
            liters: Yup.number(),
            power: Yup.number(),
            price: Yup.number(),
            city: Yup.string(),
            kilometers: Yup.number(),
            bodyType: Yup.string(),
            image: Yup.string().url(),
            wheelsDrive: Yup.string(),
          })
        }
      >
        <StyledAddCarForm>
          <StyledTitle>
            <h1>Add Car Form</h1>
          </StyledTitle>

          <div>
            <StyledLabelWrapper>
              <label htmlFor="brand">Brand</label>
              <StyledError name="brand" component="div" />
            </StyledLabelWrapper>
            <StyledSelect as="select" name="brand">
              <option value="--Select car brand--">--Select car brand--</option>
              <option>BMW</option>
              <option>AUDI</option>
              <option>VOLVO</option>
              <option>VW</option>
              <option>PEUGEOT</option>
              <option>OPEL</option>
              <option>TOYOTA</option>
            </StyledSelect>
          </div>

          <div>
            <StyledLabelWrapper>
              <label htmlFor="color">Color</label>
              <StyledError name="color" component="div" />
            </StyledLabelWrapper>
            <StyledSelect as="select" name="color">
              <option value="--Select car color--">--Select car color--</option>
              <option>white</option>
              <option>black</option>
              <option>red</option>
              <option>yellow</option>
              <option>green</option>
              <option>gray</option>
              <option>pink</option>
            </StyledSelect>
          </div>

          <div>
            <StyledLabelWrapper>
              <label htmlFor="make">Make</label>
              <StyledError name="make" component="div" />
            </StyledLabelWrapper>
            <StyledInput>
              <Field
                label="make"
                name="make"
                type="text"
                placeholder="Type your make"
              />
            </StyledInput>
          </div>

          <YearSelect>
            <StyledLabelWrapper>
              <label htmlFor="year">Year</label>
              <StyledError name="year" component="div" />
            </StyledLabelWrapper>
            <div>
              <StyledSelect as="select" name="year">
                <option>--</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
                <option>2014</option>
                <option>2013</option>
                <option>2012</option>
                <option>2011</option>
                <option>2010</option>
                <option>2009</option>
                <option>2008</option>
                <option>2007</option>
                <option>2006</option>
                <option>2005</option>
                <option>2004</option>
                <option>2003</option>
                <option>2002</option>
                <option>2001</option>
                <option>2000</option>
                <option>1999</option>
                <option>1998</option>
                <option>1997</option>
                <option>1996</option>
                <option>1995</option>
                <option>1994</option>
                <option>1993</option>
                <option>1992</option>
                <option>1991</option>
                <option>1990</option>
                <option>1989</option>
                <option>1988</option>
                <option>1987</option>
                <option>1986</option>
                <option>1985</option>
                <option>1984</option>
                <option>1983</option>
                <option>1982</option>
                <option>1981</option>
                <option>1980</option>
                <option>1979</option>
                <option>1978</option>
                <option>1977</option>
                <option>1976</option>
                <option>1975</option>
                <option>1974</option>
                <option>1973</option>
                <option>1972</option>
                <option>1971</option>
                <option>1970</option>
                <option>1969</option>
                <option>1968</option>
                <option>1967</option>
                <option>1966</option>
                <option>1965</option>
                <option>1964</option>
                <option>1963</option>
                <option>1962</option>
                <option>1961</option>
                <option>1960</option>
                <option>1959</option>
                <option>1958</option>
                <option>1957</option>
                <option>1956</option>
                <option>1955</option>
                <option>1954</option>
                <option>1953</option>
                <option>1952</option>
                <option>1951</option>
                <option>1950</option>
                <option>1949</option>
                <option>1948</option>
                <option>1947</option>
                <option>1946</option>
                <option>1945</option>
                <option>1944</option>
                <option>1943</option>
                <option>1942</option>
                <option>1941</option>
                <option>1940</option>
                <option>1939</option>
                <option>1938</option>
                <option>1937</option>
                <option>1936</option>
                <option>1935</option>
                <option>1934</option>
                <option>1933</option>
                <option>1932</option>
                <option>1931</option>
                <option>1930</option>
                <option>1929</option>
                <option>1928</option>
                <option>1927</option>
                <option>1926</option>
                <option>1925</option>
                <option>1924</option>
                <option>1923</option>
                <option>1922</option>
                <option>1921</option>
                <option>1920</option>
                <option>1919</option>
                <option>1918</option>
                <option>1917</option>
                <option>1916</option>
                <option>1915</option>
                <option>1914</option>
                <option>1913</option>
                <option>1912</option>
                <option>1911</option>
                <option>1910</option>
                <option>1909</option>
                <option>1908</option>
                <option>1907</option>
                <option>1906</option>
                <option>1905</option>
                <option>1904</option>
                <option>1903</option>
                <option>1902</option>
                <option>1901</option>
                <option>1900</option>
              </StyledSelect>

              <StyledSelect className="month" as="select" name="month">
                <option>--</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </StyledSelect>
            </div>
          </YearSelect>

          <div>
            <StyledLabelWrapper>
              <label htmlFor="fuelType">Fuel type</label>
              <StyledError name="fuelType" component="div" />
            </StyledLabelWrapper>
            <StyledSelect as="select" name="fuelType">
              <option>Diesel</option>
              <option>Petrol</option>
            </StyledSelect>
          </div>

          <div>
            <StyledLabelWrapper>
              <label htmlFor="transmision">Transmision</label>
              <StyledError name="transmision" component="div" />
            </StyledLabelWrapper>
            <StyledSelect as="select" name="transmision">
              <option>Automatic</option>
              <option>Manual</option>
            </StyledSelect>
          </div>

          <div>
            <StyledLabelWrapper>
              <label htmlFor="liters">Liters</label>
              <StyledError name="liters" component="div" />
            </StyledLabelWrapper>
            <StyledSelect as="select" name="liters">
              <option>--</option>
              <option>1.2</option>
              <option>1.4</option>
              <option>1.6</option>
              <option>1.8</option>
              <option>2.0</option>
              <option>2.2</option>
              <option>2.4</option>
              <option>2.5</option>
              <option>2.6</option>
              <option>2.7</option>
              <option>2.8</option>
              <option>3.0</option>
            </StyledSelect>
          </div>

          <div>
            <StyledLabelWrapper>
              <label htmlFor="power">Power KW</label>
              <StyledError name="power" component="div" />
            </StyledLabelWrapper>
            <StyledSelect name="power" />
          </div>

          <div>
            <StyledLabelWrapper>
              <label htmlFor="price">Price ($)</label>
              <StyledError name="price" component="div" />
            </StyledLabelWrapper>
            <StyledSelect name="price" />
          </div>

          <div>
            <StyledLabelWrapper>
              <label htmlFor="city">City</label>
              <StyledError name="city" component="div" />
            </StyledLabelWrapper>
            <StyledSelect as="select" name="city">
              <option>--</option>
              <option>Panevezys</option>
              <option>Kaunas</option>
              <option>Vilnius</option>
              <option>Klaipeda</option>
              <option>Kupiskis</option>
              <option>Marijampole</option>
              <option>Siauliai</option>
              <option>Radviliskis</option>
              <option>Pumpenai</option>
              <option>Pasvalys</option>
              <option>Birzai</option>
              <option>Sventoji</option>
            </StyledSelect>
          </div>

          <div>
            <StyledLabelWrapper>
              <label htmlFor="kilometers">Kilometers</label>
              <StyledError name="kilometers" component="div" />
            </StyledLabelWrapper>
            <StyledSelect name="kilometers" />
          </div>

          <div>
            <StyledLabelWrapper>
              <label htmlFor="bodyType">Body Type</label>
              <StyledError name="bodyType" component="div" />
            </StyledLabelWrapper>
            <StyledSelect as="select" name="bodyType">
              <option>--</option>
              <option>Sedan</option>
              <option>Hatchback</option>
              <option>Coupe</option>
              <option>Estate</option>
              <option>Suv</option>
            </StyledSelect>
          </div>

          <div>
            <StyledLabelWrapper>
              <label htmlFor="image">Image Url</label>
              <StyledError name="image" component="div" />
            </StyledLabelWrapper>
            <StyledSelect name="image" />
          </div>

          <div>
            <StyledLabelWrapper>
              <label htmlFor="make">Wheels driven</label>
              <StyledError name="make" component="div" />
            </StyledLabelWrapper>
            <StyledSelect as="select" name="bodyType">
              <option>--</option>
              <option>All wheel drive</option>
              <option>Rear wheel drive</option>
              <option>Front wheel drive</option>
            </StyledSelect>
          </div>

          <button type="submit">Add car</button>
        </StyledAddCarForm>
      </Formik>
    </div>
  );
};

export default NewCarForm;
