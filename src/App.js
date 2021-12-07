import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import HomePage from "./components/homePage"
import AddUserComponent from './components/customers/EditUserComponent';
import Login from "./components/logins/login";

import { useDispatch, useSelector } from "react-redux";
import { clearMessage } from "./actions/message";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();



  return (


    <div className="App">

      <Router >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/add" component={AddUserComponent} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/customer/:id" component={AddUserComponent} />
        </Switch>
      </Router>

    </div>


  );
}

export default App;
