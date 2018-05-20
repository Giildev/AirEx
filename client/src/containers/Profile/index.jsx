// Dependencies
import React, { Component } from 'react'

// Components & Containers
import "./style.css";
import ActiveTrades from "../../components/ActiveTrades";
import Reviews from "../../components/Reviews";
import ProfileData from "../../components/ProfileData";
class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="profile__left">
          <ProfileData />
        </div>
        <div className="profile__center">
          <ActiveTrades />
          <Reviews />
        </div>
        
      </div>
    )
  }
}
export default Profile;