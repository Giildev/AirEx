// Dependencies
import React, { Component } from "react";
import Camera from "../../images/camera.png";

// Components & Containers
import "./style.css";

export default class EditProfile extends Component {
  render() {
    return (
      <div className="editProfileForm">
        <div
          className="editProfileForm__avatar"
        >
            <img
              className="editProfileForm__avatar__prop"
              src={Camera}
              alt="Camera icon"
            />
            Change
        </div>
        <div
          className="editProfileForm__form"
        >
          <input className="editProfileForm__form__input" type="text" placeholder="Name"/>
          <input className="editProfileForm__form__input" type="email" placeholder="Email"/>
          <input className="editProfileForm__form__input" type="password" placeholder="Change Password"/>
          <input className="editProfileForm__form__input" type="password" placeholder="Repeat Password"/>
          <input className="editProfileForm__form__input--submit" type="submit" value="Save Changes"/>
        </div>
      </div>
    );
  }
}
