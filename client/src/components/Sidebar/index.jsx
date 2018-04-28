// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avatar from "../../images/johndoe.jpg";

// Components & Containers
import "./style.css";

export default class Sidebar extends Component {
  render() {
    const { toggle } = this.props;
    return (
      <div className="menu">
        <div className={`menu__container ${toggle ? "" : "menu__container__off"}`}>
          <div className="menu__avatar">
            <img className="menu__avatar__prop" src={Avatar} alt="Avatar" />
            <h2>John Doe</h2>
          </div>
          <div className="menu__list">
            <div className="menu__balance">
              <h3>Balance:</h3>
              <span>USD: 22.14</span>
            </div>
            <div className="menu__trades">
              <Link className="link" to="/trades">
                Trades
              </Link>
            </div>
            <div className="menu__profile">
              <Link className="link" to="/public-profile">
                Public Profile
              </Link>
            </div>
            <div className="menu__airtm">
              <Link target="_blank" className="link" to="https://www.airtm.io/">
                Go to AirTM
              </Link>
            </div>
            <div className="menu__help">
              <Link className="link" to="/help">
                Help
              </Link>
            </div>
            <div className="menu__logout">
              <Link className="link" to="/">
                Log Out
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
