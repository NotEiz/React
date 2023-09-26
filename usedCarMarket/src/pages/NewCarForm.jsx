import { Formik, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import styled from "styled-components";
import { StyledForm } from "../components/styled/StyledForm";
import { StyledButton } from "../components/styled/StyledButton";

import { StyledError, StyledLabelWrapper } from "./Register";
import { CreateNewCar } from "../API/Cars";
import { HOME_PATH } from "../routes/routeConsts";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const YearSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  div {
    display: flex;
  }

  .month {
    margin-left: 1rem;
  }
`;

const StyledTitle = styled.div`
  width: 100%;
  text-align: center;
`;

const ButtonDiv = styled.div`
  width: 100%;
  text-align: center;
`;

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

  input,
  select {
    padding: 0.5rem;
    width: 188px;
  }

  .imageUrls {
    width: 100%;

    input {
      width: 100%;
    }
  }
`;

const NewCarForm = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  console.log(user);
  const handleAddNewCar = async (values) => {
    try {
      await CreateNewCar(values);
      navigate(HOME_PATH);
    } catch (error) {
      console.log(error);
    }
  };

  const getInitialValues = (userId) => ({
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
    userId,
  });

  return (
    <div className="loginBackground">
      <Formik
        initialValues={getInitialValues(user.id)}
        onSubmit={handleAddNewCar}
        validationSchema={() =>
          Yup.object({
            brand: Yup.string(),
            color: Yup.string(),
            make: Yup.string(),
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
            userId: Yup.number(),
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
            <Field as="select" name="brand">
              <option value="">--Select car brand--</option>
              <option value="BMW">BMW</option>
              <option value="AUDI">AUDI</option>
              <option value="VOLVO">VOLVO</option>
              <option value="VW">VW</option>
              <option value="PEUGEOT">PEUGEOT</option>
              <option value="OPEL">OPEL</option>
              <option value="TOYOTA">TOYOTA</option>
            </Field>
          </div>

          <div>
            <StyledLabelWrapper>
              <label htmlFor="make">Make</label>
              <StyledError name="make" component="div" />
            </StyledLabelWrapper>
            <Field as="select" name="make">
              <option value="">--Select car make--</option>
              <option value="BMW">3 series</option>
              <option value="AUDI">AUDI</option>
              <option value="VOLVO">VOLVO</option>
              <option value="VW">VW</option>
              <option value="PEUGEOT">PEUGEOT</option>
              <option value="OPEL">OPEL</option>
              <option value="TOYOTA">TOYOTA</option>
            </Field>
          </div>

          <div>
            <StyledLabelWrapper>
              <label htmlFor="color">Color</label>
              <StyledError name="color" component="div" />
            </StyledLabelWrapper>
            <Field as="select" name="color">
              <option value="--Select car color--">--Select car color--</option>
              <option>white</option>
              <option>black</option>
              <option>red</option>
              <option>yellow</option>
              <option>green</option>
              <option>gray</option>
              <option>pink</option>
            </Field>
          </div>

          <YearSelect>
            <StyledLabelWrapper>
              <label htmlFor="year">Year</label>
              <StyledError name="year" component="div" />
            </StyledLabelWrapper>
            <div>
              <Field as="select" name="year">
                <option>--Select car year--</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
                <option value="1969">1969</option>
                <option value="1968">1968</option>
                <option value="1967">1967</option>
                <option value="1966">1966</option>
                <option value="1965">1965</option>
                <option value="1964">1964</option>
                <option value="1963">1963</option>
                <option value="1962">1962</option>
                <option value="1961">1961</option>
                <option value="1960">1960</option>
                <option value="1959">1959</option>
                <option value="1958">1958</option>
                <option value="1957">1957</option>
                <option value="1956">1956</option>
                <option value="1955">1955</option>
                <option value="1954">1954</option>
                <option value="1953">1953</option>
                <option value="1952">1952</option>
                <option value="1951">1951</option>
                <option value="1950">1950</option>
                <option value="1949">1949</option>
                <option value="1948">1948</option>
                <option value="1947">1947</option>
                <option value="1946">1946</option>
                <option value="1945">1945</option>
                <option value="1944">1944</option>
                <option value="1943">1943</option>
                <option value="1942">1942</option>
                <option value="1941">1941</option>
                <option value="1940">1940</option>
                <option value="1939">1939</option>
                <option value="1938">1938</option>
                <option value="1937">1937</option>
                <option value="1936">1936</option>
                <option value="1935">1935</option>
                <option value="1934">1934</option>
                <option value="1933">1933</option>
                <option value="1932">1932</option>
                <option value="1931">1931</option>
                <option value="1930">1930</option>
                <option value="1929">1929</option>
                <option value="1928">1928</option>
                <option value="1927">1927</option>
                <option value="1926">1926</option>
                <option value="1925">1925</option>
                <option value="1924">1924</option>
                <option value="1923">1923</option>
                <option value="1922">1922</option>
                <option value="1921">1921</option>
                <option value="1920">1920</option>
                <option value="1919">1919</option>
                <option value="1918">1918</option>
                <option value="1917">1917</option>
                <option value="1916">1916</option>
                <option value="1915">1915</option>
                <option value="1914">1914</option>
                <option value="1913">1913</option>
                <option value="1912">1912</option>
                <option value="1911">1911</option>
                <option value="1910">1910</option>
                <option value="1909">1909</option>
                <option value="1908">1908</option>
                <option value="1907">1907</option>
                <option value="1906">1906</option>
                <option value="1905">1905</option>
                <option value="1904">1904</option>
                <option value="1903">1903</option>
                <option value="1902">1902</option>
                <option value="1901">1901</option>
                <option value="1900">1900</option>
              </Field>

              <Field className="month" as="select" name="month">
                <option>--Select car month--</option>
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
              </Field>
            </div>
          </YearSelect>

          <div>
            <StyledLabelWrapper>
              <label htmlFor="fuelType">Fuel type</label>
              <StyledError name="fuelType" component="div" />
            </StyledLabelWrapper>
            <Field as="select" name="fuelType">
              <option>--Select Fuel Type--</option>
              <option>Diesel</option>
              <option>Petrol</option>
            </Field>
          </div>

          <div>
            <StyledLabelWrapper>
              <label htmlFor="transmision">Transmision</label>
              <StyledError name="transmision" component="div" />
            </StyledLabelWrapper>
            <Field as="select" name="transmision">
              <option>--</option>
              <option>Automatic</option>
              <option>Manual</option>
            </Field>
          </div>

          <div>
            <StyledLabelWrapper>
              <label htmlFor="liters">Liters</label>
              <StyledError name="liters" component="div" />
            </StyledLabelWrapper>
            <Field as="select" name="liters">
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
            </Field>
          </div>

          <div>
            <StyledLabelWrapper>
              <label htmlFor="power">Power KW</label>
              <StyledError name="power" component="div" />
            </StyledLabelWrapper>
            <Field name="power" />
          </div>

          <div>
            <StyledLabelWrapper>
              <label htmlFor="price">Price ($)</label>
              <StyledError name="price" component="div" />
            </StyledLabelWrapper>
            <Field name="price" />
          </div>

          <div>
            <StyledLabelWrapper>
              <label htmlFor="city">City</label>
              <StyledError name="city" component="div" />
            </StyledLabelWrapper>
            <Field as="select" name="city">
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
            </Field>
          </div>

          <div>
            <StyledLabelWrapper>
              <label htmlFor="kilometers">Kilometers</label>
              <StyledError name="kilometers" component="div" />
            </StyledLabelWrapper>
            <Field name="kilometers" />
          </div>

          <div>
            <StyledLabelWrapper>
              <label htmlFor="bodyType">Body Type</label>
              <StyledError name="bodyType" component="div" />
            </StyledLabelWrapper>
            <Field as="select" name="bodyType">
              <option>--</option>
              <option>Sedan</option>
              <option>Hatchback</option>
              <option>Coupe</option>
              <option>Estate</option>
              <option>Suv</option>
            </Field>
          </div>

          <div>
            <StyledLabelWrapper>
              <label htmlFor="condision">Condision</label>
              <StyledError name="condision" component="div" />
            </StyledLabelWrapper>
            <Field as="select" name="condision">
              <option>--</option>
              <option>New</option>
              <option>Used</option>
            </Field>
          </div>

          <div>
            <StyledLabelWrapper>
              <label htmlFor="wheelsDrive">Wheels driven</label>
              <StyledError name="wheelsDrive" component="div" />
            </StyledLabelWrapper>
            <Field as="select" name="wheelsDrive">
              <option>--</option>
              <option>All wheel drive</option>
              <option>Rear wheel drive</option>
              <option>Front wheel drive</option>
            </Field>
          </div>

          <div className="imageUrls">
            <StyledLabelWrapper>
              <label htmlFor="image">Image Url 1</label>
              <StyledError name="image" component="div" />
            </StyledLabelWrapper>
            <Field name="image" />

            <StyledLabelWrapper>
              <label htmlFor="image2">Image Url 2</label>
              <StyledError name="image2" component="div" />
            </StyledLabelWrapper>
            <Field name="image2" />

            <StyledLabelWrapper>
              <label htmlFor="image3">Image Url 3</label>
              <StyledError name="image3" component="div" />
            </StyledLabelWrapper>
            <Field name="image3" />
          </div>

          <ButtonDiv>
            <StyledButton type="submit">Add car</StyledButton>
          </ButtonDiv>
        </StyledAddCarForm>
      </Formik>
    </div>
  );
};

export default NewCarForm;
