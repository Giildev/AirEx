// Dependencies
import React from 'react'

// Components & Containers
import "./style.css";
import Sidebar from "../Sidebar";
export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
  }
  render() {
    return (
      <div>
        <div className='header'>
          <div className='btn btn--header'>
            <div
              className='btn__menu'
              onClick = { () => {
                this.setState({toggle: !this.state.toggle})
              } }
            >
              <img
                src={
                  this.state.toggle ?
                    require('../../images/cancel.png')
                    :
                    require('../../images/menu.png')                  
                }
                alt='Header button for menu'
              />
            </div>
          </div>
          <div className='btn btn--header'>
            <div className='btn__menu'>
              <img
                src={ require('../../images/Airtm01.png') } 
                alt=''
              />
            </div>
          </div>
        </div>
        <Sidebar
          toggle={this.state.toggle}
        />
      </div>
    )
  }
}
