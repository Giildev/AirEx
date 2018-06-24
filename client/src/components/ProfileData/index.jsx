// Dependencies
import React, { Component } from 'react'
import Avatar from "../../images/johndoe.jpg";

// Components & Containers
import "./style.css";

export default class ProfileData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        'User Data',
        'User Data',
        'User Data',
        'User Data',        
      ]
    };
  }
  render() {
    return (
      <div className="profileData">
        <div className="profileData__avatar">
          <img className="profileData__avatar__prop" src={Avatar} alt="Avatar" />
          <h2 className="profileData__avatar__name" >
            John Doe
          </h2>
          <span className="profileData__avatar__percentage">
            74%
          </span>
        </div>
        <div className="profileData__list">
          {this.state.data.map((dat, index) => (
            <li 
              className="profileData__list__entry"
              key={index}
            >
            {dat}
            </li>
          ))}
        </div>
        <div
          className="profileData__edit"
        >
          Edit
        </div>
      </div>
    )
  }
}
