// Dependencies
import React, { Component } from "react";
import Select from "react-select";

// Components & Containers
import "./style.css";

export default class ListCoin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        {
          value: "BTC",
          label: "Bitcoin"
        },
        {
          value: "ETH",
          label: "Ethereum"
        },
        {
          value: "XRP",
          label: "Ripple"
        },
        {
          value: "LTC",
          label: "Litecoin"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Select
          className="coinSelector"
          placeholder="Select Coin"
          options={this.state.options}
        />
      </div>
    );
  }
}
