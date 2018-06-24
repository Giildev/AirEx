// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components & Containers
import "./style.css";

export default class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [
        {
          user: "John Doe",
          type: "Upvote",
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          user: "John Doe",
          type: "Downvote",
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          user: "Jane Doe",
          type: "Upvote",
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        
      ]
    };
  }

  render() {
    return (
      <div className="review">
        <h1
          className="review__title"
        >
          Reviews
        </h1>
        <div className="review__badge">

          {this.state.reviews.map((review, index) => (
            <div className="review__badge__entry" key={index}>
              <div className="review__badge__title">
                <Link
                  to={`/public-profile/${index}`}
                  className="review__badge__entry__name"
                >
                  {review.user}
                </Link>
                <span className= {`review__${review.type}`} >{review.type}</span>
              </div>

              <span className="review__badge__entry__currencyToTrade">
                {review.message}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
