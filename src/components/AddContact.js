import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import favicon from "../favicon.png";

const AddContact = () => {
  return (
    <>
      <div style={{ display: "in-line", paddingLeft: "40%" }}>
        <img src={favicon} alt="logo" width="113" height="113" />
        <h1>Add Contact</h1>
      </div>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="first_name">First Name</Label>
              <Input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="First Name"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="last_name">Last Name</Label>
              <Input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Last Name"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="Email Address"
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone_number">Phone Number</Label>
          <Input
            type="text"
            name="phone_number"
            id="phone_number"
            placeholder="Phone Number"
          />
        </FormGroup>
        <Button>Add Contact</Button>
      </Form>
    </>
  );
};

export default AddContact;
