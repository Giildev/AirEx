// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components & Containers
import "./style.css";

export default class ActiveTrades extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buy: true,
      transactions: [
        {
          percent: "99",
          currency: "BTC",
          amount: "0.0005",
          price: "21.55"
        },
        {
          percent: "99",
          currency: "ETH",
          amount: "0.0005",
          price: "30.55"
        },
        {
          percent: "99",
          currency: "BTC",
          amount: "0.0005",
          price: "21.55"
        },
        {
          percent: "99",
          currency: "BTC",
          amount: "0.0005",
          price: "21.55"
        },
        {
          percent: "99",
          currency: "BTC",
          amount: "0.0005",
          price: "21.55"
        },
        {
          percent: "99",
          currency: "BTC",
          amount: "0.0005",
          price: "21.55"
        },
        {
          percent: "99",
          currency: "BTC",
          amount: "0.0005",
          price: "21.55"
        },
        {
          percent: "99",
          currency: "BTC",
          amount: "0.0005",
          price: "21.55"
        },
        {
          percent: "99",
          currency: "BTC",
          amount: "0.0005",
          price: "21.55"
        },
        {
          percent: "99",
          currency: "BTC",
          amount: "0.0005",
          price: "21.55"
        }
      ]
    };
  }

  render() {
    const { buy } = this.state;
    return (
      <div className="activeTrade">
        <h1
          className="activeTrade__title"
        >
          Active Trades
        </h1>
        <div className="activeTrade__badge">

          {this.state.transactions.map((trans, index) => (
            <div className="activeTrade__badge__entry" key={index}>

              <Link
                to={`/public-profile/${index}`}
                className="activeTrade__badge__entry__name"
              >
                You are
              </Link>
              <span className="activeTrade__badge__entry__typeOfTrade">
                {buy ? "Buying" : "Selling"}
              </span>
              <span className="activeTrade__badge__entry__currencyToTrade">
                {trans.currency} {trans.amount}
              </span>{" "}
              for
              <span className="activeTrade__Green">${trans.price}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
