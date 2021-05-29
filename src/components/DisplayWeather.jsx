import React from "react";
import { Container, ListGroup, Row, Col } from "react-bootstrap";

const DisplayWeather = (props) => {
  const { data } = props;
  const iconurl =
    "http://openweathermap.org/img/w/" +
    `${data.cod !== 404 ? data.weather[0].icon : null}` +
    ".png";
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col>
          <span>
            {data.name} , {data.sys.country}. Weather
          </span>
          <h5>Time: {new Date().toLocaleTimeString()}</h5>
        </Col>
        <Col>
          <h3>
            {" "}
            Temprature : {Math.floor(data.main.temp - 273.15)}
            <sup>o</sup>
          </h3>
        </Col>
        <Col>
          {/* <h6 c>{data.weather[0].main}</h6> */}
          <img src={iconurl}  alt="" srcset="" />
          <h6> {data.weather[0].description}</h6>
        </Col>
      </Row>

      <ListGroup>
        <ListGroup.Item>
          <h4>High/Low </h4>  {Math.floor(data.main.temp_max - 273.15)}/
          {Math.floor(data.main.temp_min - 273.15)}
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <h4> Humidity</h4> {data.main.humidity} %{" "}
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <h4> Pressure </h4> {data.main.pressure} hPa
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <h4>Visibility </h4> {data.visibility / 1000} Km{" "}
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <h4>Wind </h4> {Math.floor((data.wind.speed * 18) / 5)} km/hr
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <h4>Wind Direction </h4> {data.wind.deg}
          <sup>o</sup> deg %{" "}
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <h4>Sunrise </h4>{" "}
          {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}{" "}
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <h4>Sunset </h4>{" "}
          {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default DisplayWeather;
