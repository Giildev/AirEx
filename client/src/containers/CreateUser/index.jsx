// Dependencies
import React, { Component } from 'react'

// Components & Containers
import "./style.css";
import CreateUserForm from "../../components/CreateUserForm";
class CreateUser extends Component {
  render() {
    return (
      <div className="createUser">
        <div className="createUser__center">
          <CreateUserForm />
        </div>
        
      </div>
    )
  }
}
export default CreateUser;