import React from "react";
import Card from "react-bootstrap/Card";
import logo from "../logo.svg";

const Team = () => {
  return (
    <Card style={{ width: "18rem", margin: "auto" }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>React Developer</Card.Title>
        <Card.Text>
          Using ReactJS for developing front end and bootstrap to style the page
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Team;
