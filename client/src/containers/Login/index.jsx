// Dependencies
import React, { Component } from "react";
// import axios from "axios";

// Components & Containers
import "./style.css";
import logo from "../../images/Airtmlogo.png";

class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      object: ""
    };
  }

  render() {
    return (
      <div className="content__container login">
        <img className="login__logo" src={logo} alt="logo" />
        <h1 className="login__title">Login</h1>
        <div className="login__form">
          <input className="login__input" placeholder="Email" type="email" />
          <input
            className="login__input"
            placeholder="Password"
            type="password"
          />
          <span className="login__forgot">
            Forgot your password? Recover it{" "}
            <a className="login--Link" href="/forgot">
              here
            </a>
          </span>
          <button className="login__submit">Enter</button>
        </div>
      </div>
    );
  }
}

export default login;
