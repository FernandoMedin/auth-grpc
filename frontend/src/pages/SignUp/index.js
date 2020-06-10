import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";

import { Form, Container } from "./styles";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    if (!username || !email || !password) {
      this.setState({ error: "Fill the user, email and password field. 🔒" });
    } else {
      try {
        await api.post("/users", { username, email, password });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({
          error:
            "There was a problem creating your account. 💩"
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="user"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <input
            type="email"
            placeholder="E-mail address"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Sign up</button>
          <hr />
          <Link to="/">Login</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);