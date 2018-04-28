// Dependencies
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components & Containers
import "./App.css";
import Home from "./containers/Home/";
import Header from "./components/Header/";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />

          {/* <Route path="/about" component={About}/> */}
        </div>
      </Router>
    );
  }
}

export default App;
