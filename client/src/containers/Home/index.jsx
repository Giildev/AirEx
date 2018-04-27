// Dependencies
import React, { Component } from "react";
import axios from "axios";

// Components & Containers
import "./style.css";
import Header from "../../components/Header";
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
        <Header />
      </div>
    );
  }
}

export default Home;
