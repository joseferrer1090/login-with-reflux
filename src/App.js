import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Login } from "./views/Login";
import { Home } from "./views/Home";

import "./App.css";
import "./../node_modules/bulma/css/bulma.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
