// Dependencies
import React, { Component } from "react";
import axios from "axios";

// Components & Containers
import "./style.css";
import Header from "../../components/Header";
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
        <ListCoin />
        <ListTrades />

      </div>
    );
  }
}

export default Home;
