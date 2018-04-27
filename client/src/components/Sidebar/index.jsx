// Dependencies
import React, { Component } from 'react'

// Components & Containers
import "./style.css";

export default class Sidebar extends Component {
  render() {
    const { toggle } = this.props;
    return (
      <aside className={ toggle? '': 'off'} >
        <div className="pic">
          <img
            src={ require('../../images/johndoe.jpg') }
          />
          <h2>
            John Doe
          </h2>
        </div>
        <ul className="opts" >
          <li className="opts--balance">
            <h3>Balance:</h3>
            <span>USD: 22.14</span>
          </li>      
          <li>Trades</li>
          <li>Public Profile</li>
          <li>Go to AirTM</li>
          <li>Help</li>
          <li>Log Out</li>
        </ul>
      </aside>
    )
  }
}
