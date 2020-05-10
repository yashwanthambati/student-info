import React from "react";
import {
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import {Button} from 'react-bootstrap';
import {Link } from 'react-router-dom'


const Example = (props) => {
  return (
    <Form >
      <FormGroup row>
        <Label for="exampleSelect" sm={2}>
          Select Branch
        </Label>
        <Col sm={10}>
          <Input type="select" name="select" id="Select-branch">
            <option>CSE</option>
            <option>ECE</option>
            <option>EEE</option>
            <option>MECH</option>
            <option>CIVIL</option>
            <option>IT</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelect" sm={2}>
          Select Section
        </Label>
        <Col sm={10}>
          <Input type="select" name="select" id="Select-section">
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>E</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelect" sm={2}>
          Select Year
        </Label>
        <Col sm={10}>
          <Input type="select" name="select" id="Select-year">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </Input>
        </Col>
      </FormGroup>
      <Link to='/data'>
      <Button variant="outline-secondary" size="sm">
      Submit
    </Button>
      </Link>
          
        
    </Form>
  );
};

export default Example;
