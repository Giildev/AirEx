// Dependencies
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components & Containers
import "./App.css";
import Header from "./components/Header";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Profile from "./containers/Profile";
import EditProfile from "./containers/EditProfile";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/login"}
            component={Login}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/profile"}
            component={Profile}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/editprofile"}
            component={EditProfile}
          />
        </div>
      </Router>
    );
  }
}

export default App;
