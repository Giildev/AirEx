// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components & Containers
import "./style.css";
import user from "../../images/janedoe.png";

export default class listTrades extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buy: true,
      transactions: [
        {
          percent: "99",
          user: "Mary Doe",
          currency: "BTC",
          amount: "0.0005",
          price: "21.55"
        },
        {
          percent: "99",
          user: "Mary Doe",
          currency: "ETH",
          amount: "0.0005",
          price: "30.55"
        },
        {
          percent: "99",
          user: "Mary Doe",
          currency: "BTC",
          amount: "0.0005",
          price: "21.55"
        },
        {
          percent: "99",
          user: "Mary Doe",
          currency: "BTC",
          amount: "0.0005",
          price: "21.55"
        },
        {
          percent: "99",
          user: "Mary Doe",
          currency: "BTC",
          amount: "0.0005",
          price: "21.55"
        },
        {
          percent: "99",
          user: "Mary Doe",
          currency: "BTC",
          amount: "0.0005",
          price: "21.55"
        },
        {
          percent: "99",
          user: "Mary Doe",
          currency: "BTC",
          amount: "0.0005",
          price: "21.55"
        },
        {
          percent: "99",
          user: "Mary Doe",
          currency: "BTC",
          amount: "0.0005",
          price: "21.55"
        },
        {
          percent: "99",
          user: "Mary Doe",
          currency: "BTC",
          amount: "0.0005",
          price: "21.55"
        },
        {
          percent: "99",
          user: "Mary Doe",
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
      <div className="listTrade">
        <div className="listTrade__tabs">
          <button
            className={
              buy
                ? "listTrade__tabs__button listTrade__tabs__button--selected"
                : "listTrade__tabs__button"
            }
            onClick={() => {
              if (!buy) {
                this.setState({ buy: true });
              }
            }}
          >
            Buy
          </button>
          <button
            className={
              !buy
                ? "listTrade__tabs__button listTrade__tabs__button--selected"
                : "listTrade__tabs__button"
            }
            onClick={() => {
              if (buy) {
                this.setState({ buy: false });
              }
            }}
          >
            Sell
          </button>
        </div>
        <div className="listTrade__badge">
          {this.state.transactions.map((trans, index) => (
            <div className="listTrade__badge__entry" key={index}>
              <img
                className="listTrade__badge__entry__avatar"
                src={user}
                alt="avatar"
              />
              <span className="listTrade__badge__entry__reputation">
                {trans.percent}%
              </span>
              <Link
                to={`/public-profile/${index}`}
                className="listTrade__badge__entry__name"
              >
                {trans.user}
              </Link>
              <span className="listTrade__badge__entry__typeOfTrade">
                {buy ? "Buying" : "Selling"}
              </span>
              <span className="listTrade__badge__entry__currencyToTrade">
                {trans.currency} {trans.amount}
              </span>{" "}
              for
              <span className="listTrade__Green">${trans.price}</span>
              <button className="listTrade__badge__entry__action">
                {buy ? "Sell" : "Buy"}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
