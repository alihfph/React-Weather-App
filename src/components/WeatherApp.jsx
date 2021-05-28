import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import { Container, Button, Form, Row, InputGroup, Col } from "react-bootstrap";

const WeatherApp = () => {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  const APIKEY = "ba134ec0dbcf359ab89c5131fddbffb3";
  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("Add values");
    } else {
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
      );
      const data = await resp.json();

      setWeather({ data });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
    if (name === "country") {
      setForm({ ...form, country: value });
    }
  };
  return (
    <Container>
      <Row>
      <Col>
        <Form>
          <h2 className="item-center">Weather App</h2>
          <div className="d-flex my-3">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Enter Your City</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="City"
                className="me-1"
                name="city"
                onChange={(e) => handleChange(e)}
              />
              <InputGroup.Append>
                <Button
                  variant="outline-secondary"
                  onClick={(e) => weatherData(e)}
                >
                  Submit
                </Button>
              </InputGroup.Append>
              {/* 
              <Form.Control
                type="text"
                className="me-1"
                placeholder="Country"
                name="country"
                onChange={(e) => handleChange(e)}
              /> */}
            </InputGroup>

            {/* <Button variant="primary" onClick={(e) => weatherData(e)}>
              Submit
            </Button> */}
          </div>
        </Form>

        {/* {console.log(weather)} */}
        {weather.data !== undefined ? (
          <div className = "ml-5">
            <DisplayWeather data={weather.data} />
          </div>
        ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherApp;
