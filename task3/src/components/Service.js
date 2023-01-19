import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import {
  BsTornado,
  BsHouseDoor,
  BsFillEmojiHeartEyesFill,
} from "react-icons/bs";

const Service = () => {
  return (
    <ListGroup style={{ width: "25rem", margin: "auto" }}>
      <ListGroup.Item>
        <BsTornado /> Tornado alert app
      </ListGroup.Item>
      <ListGroup.Item>
        <BsHouseDoor />
        Home automation system
      </ListGroup.Item>
      <ListGroup.Item>
        <BsFillEmojiHeartEyesFill />
        Rent-a-girlfriend app
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Service;
