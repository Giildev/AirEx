// Dependencies
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components & Containers
import "./App.css";
import Home from "./containers/Home/";
import Login from "./containers/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          
          <Route path="/login" component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App;
