// Dependencies
import React, { Component } from 'react'

// Components & Containers
import "./style.css";

export default class ListCoin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        {
          symbol: 'BTC',
          name: 'Bitcoin',
        },
        {
          symbol: 'ETH',
          name: 'Ethereum',
        },
        {
          symbol: 'XRP',
          name: 'Ripple',
        },
        {
          symbol: 'LTC',
          name: 'Litecoin',
        },
      ]
    };
  }

  render() {
    return (
      <div className="CoinSelector">
        <select className="CoinSelector__Select" name="ListCoin">
          {this.state.options.map( (option, index) => 
            <option value={option.symbol} key={index}>{option.name}</option>
          )}
        </select>
      </div>
    )
  }
}
