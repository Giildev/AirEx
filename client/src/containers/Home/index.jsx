// Dependencies
import React, { Component } from "react";
import axios from "axios";

// Components & Containers
import "./style.css";
import ListCoin from "../../components/ListCoin";
import ListTrades from "../../components/ListTrades";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      object: ""
    };
  }

  componentWillMount() {
    axios.get(`http://localhost:4000/api/coins`).then(res => {
      console.log(res.data);
      this.setState({
        object: res.data.object
      });
    });
  }

  render() {
    return (
      <div className="content__container">
        <ListCoin />
        <ListTrades />
      </div>
    );
  }
}

export default Home;
