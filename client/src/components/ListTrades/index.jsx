// Dependencies
import React, { Component } from 'react'

// Components & Containers
import "./style.css";
import user from "../../images/user.png"

export default class ListTrades extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buy: true,
      transactions: [
        {
          percent: '99',
          user: 'Mary Doe',
          currency: 'BTC',          
          amount: '0.0005',
          price: '21.55',
        },
        {
          percent: '99',
          user: 'Mary Doe',
          currency: 'BTC',          
          amount: '0.0005',
          price: '21.55',
        },
        {
          percent: '99',
          user: 'Mary Doe',
          currency: 'BTC',          
          amount: '0.0005',
          price: '21.55',
        },
        {
          percent: '99',
          user: 'Mary Doe',
          currency: 'BTC',
          amount: '0.0005',
          price: '21.55',
        },
      ]
    };
  }

  render() {
    const { buy } = this.state;
    return (
      <div className="ListTrade">
          <button className={
            buy ? 
            "ListTrade__Tab ListTrade--Selected"
            :
            "ListTrade__Tab"
          }
          onClick={ () => {
            if(!buy){
              this.setState({buy: true});
            }
          }}
          >
            Buy
          </button>
          <button className={
            !buy ? 
            "ListTrade__Tab ListTrade--Selected"
            :
            "ListTrade__Tab"
          }
          onClick={ () => {
            if(buy){
              this.setState({buy: false});
            }
          }}
          >
            Sell
          </button>
        <div className="ListTrade__Badge">
          {this.state.transactions.map( (trans, index) => 
            <div className="ListTrade__Entry" key={index}>
              <img className="ListTrade__User" src={user} />
              <span className="ListTrade__Green ListTrade--Bold">{trans.percent}%</span>&nbsp;
              <span className="ListTrade--Bold">{trans.user}</span>&nbsp;
              <span className="ListTrade__Action">
              {buy ?
              "Buying"
              :
              "Selling"
              }
              </span>&nbsp;
              <span className="ListTrade--Bold">{trans.currency} {trans.amount}</span>&nbsp;
              for&nbsp;
              <span className="ListTrade__Green">{trans.price}</span>
              <button className="ListTrade__Btn">Buy</button>
            </div>
          )}
        </div>
      </div>
    )
  }
}
