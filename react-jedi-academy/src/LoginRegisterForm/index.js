import React, { Component } from "react";
import { Form, Button, Label, Header, Image, Divider } from "semantic-ui-react";

class LoginRegisterForm extends Component {
  constructor() {
    super();

    this.state = {
      full_name: "",
      email: "",
      password: "",
      action: "login"
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.loginRegister();
  };
  loginRegister = () => {
    if (this.state.action === "login") {
      this.props.login({
        full_name: this.state.full_name,
        password: this.state.password
      });
    } else {
      this.props.register({
        full_name: this.state.full_name,
        email: this.state.email,
        password: this.state.password
      });
    }
  };
  switchForm = () => {
    if (this.state.action === "login") {
      this.setState({
        action: "register"
      });
    } else {
      this.setState({
        action: "login"
      });
    }
  };
  render() {
    return (
      <div>
        <div>
          <Header>
            <h1> Jedi Academy </h1>
          </Header>
          <Image
            src="http://www.jemome.com/cdn/2015/01/star-wars-jedi-academy-logo_317354.png"
            size="medium"
            circular
            centered
          />
        </div>
        <div className="LoginRegisterForm">
          <Form onSubmit={this.handleSubmit}>
            {this.state.action === "register" ? (
              <React.Fragment>
                <Label>Email:</Label>
                <Divider hidden />
                <Form.Input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                ></Form.Input>
              </React.Fragment>
            ) : null}

            <Label>Full Name:</Label>
            <Divider hidden />
            <Form.Input
              type="text"
              name="full_name"
              value={this.state.full_name}
              onChange={this.handleChange}
            ></Form.Input>

            <Label>Password:</Label>
            <Divider hidden />
            <Form.Input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            ></Form.Input>
            <Divider hidden />
            <Button type="Submit">
              {this.state.action === "register" ? "Register" : "Login"}
            </Button>
          </Form>
          {this.state.action === "register" ? (
            <small>
              Already have an account? Log in{" "}
              <span onClick={this.switchForm}>here</span>
            </small>
          ) : (
            <small>
              Need an account? Sign up{" "}
              <span onClick={this.switchForm}>here</span>!
            </small>
          )}
        </div>
      </div>
    );
  }
}

export default LoginRegisterForm;
