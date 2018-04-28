// Dependencies
import React, { Component } from "react";

// Components & Containers
import "./style.css";
import Logo from "../../images/Airtm01.png";
import Sidebar from "../Sidebar/";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      menuToggle: false
    };
  }

  render() {
    return (
      <div>
        <div className="header">
          <div
            id="hamburger-1"
            onClick={() => {
              this.setState({ menuToggle: !this.state.menuToggle });
            }}
            className={`hamburger ${this.state.menuToggle ? "is-active" : ""}`}
          >
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </div>
          <div className="btn btn--header">
            <div className="btn__menu">
              <img src={Logo} alt="Logo" />
            </div>
          </div>
        </div>
        <Sidebar toggle={this.state.menuToggle} />
      </div>
    );
  }
}
