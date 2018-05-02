// Dependencies
import React, { Component } from "react";
import axios from "axios";

// Components & Containers
import "./style.css";
import logo from "../../images/Airtmlogo.png"

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      object: ""
    };
  }

  render() {
    return (
      <div className="Login">
        <h1 className="Login__Title">Login</h1>
        <img className="Login__Logo" src={ logo } alt="Logo"/>
        <div className="Login__Form">
          <input
            className="Login__Input"
            placeholder="Email"
            type="email"
          />
          <input
            className="Login__Input"
            placeholder="Password"
            type="password"
          />
          <p className="Login__Forgot">Forgot your password? Recover it <a className="Login--Link" href="#" >here</a></p>
          <button className="Login__Submit">Log in</button>
        </div>

      </div>
    );
  }
}

export default Login;
