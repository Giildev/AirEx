// Dependencies
import React, { Component } from "react";
import axios from "axios";

// Components & Containers
import "./style.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      object: ""
    };
  }

  componentWillMount() {
    axios.get(`http://localhost:4000/api/hello`).then(res => {
      console.log(res.data);
      this.setState({
        object: res.data.object
      });
    });
  }

  render() {
    return (

      <div>
        <div className='header'>
          <div className='btn btn--header'>
            <div className='btn__menu'>
            +
            </div>
          </div>
          <div></div>
        </div>
        <h1>{this.state.object}</h1>
      </div>
    );
  }
}

export default Home;
