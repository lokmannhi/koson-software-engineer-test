import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const ContactUs = () => {
  return (
    <Form style={{ margin: "auto", width: "25rem" }}>
      <Row>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>
      <br />
      <Form.Control placeholder="message" />
      <br />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactUs;
