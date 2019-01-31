import React, { Component } from "react";
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import Container from "../components/Container";
import { Container, Col, Form, FormGroup, Label, Input } from "reactstrap";
// import Form from "../components/Form";
// import { Redirect } from 'react-router-dom'
// import axios from 'axios'

class LoginPage extends Component {
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  render() {
    return (
      <Container>
      <p class="logotop">Colosseum</p>
        <Form>
          <FormGroup row>
            <Label for="exampleEmail" sm={2} size="lg">
              Username
            </Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Username"
                bsSize="lg"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail2" sm={2}>
              Password
            </Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                id="exampleEmail2"
                placeholder="Password"
              />
            </Col>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

export default LoginPage;
