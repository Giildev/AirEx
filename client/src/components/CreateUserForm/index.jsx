// Dependencies
import React, { Component } from "react";

// Components & Containers
import "./style.css";

export default class CreateUser extends Component {
  render() {
    return (
      <div className="createUserForm">
        <h1
          className="createUserForm__title"
        >
          Create new user
        </h1>
        <div
          className="createUserForm__form"
        >
          <input className="createUserForm__form__input" type="email" placeholder="Email"/>
          <input className="createUserForm__form__input" type="password" placeholder="Password"/>
          <input className="createUserForm__form__input--submit" type="submit" value="Create"/>          
        </div>
      </div>
    );
  }
}
