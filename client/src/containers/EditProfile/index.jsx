// Dependencies
import React, { Component } from 'react'

// Components & Containers
import "./style.css";
import EditProfileForm from "../../components/EditProfileForm";
class EditProfile extends Component {
  render() {
    return (
      <div className="editProfile">
        <div className="editProfile__center">
          <EditProfileForm />
        </div>
        
      </div>
    )
  }
}
export default EditProfile;