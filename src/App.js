import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import UsersComponent from "./components/UsersComponent"
import AddUserComponent from './components/customers/EditUserComponent';
import Login from "./components/logins/login";
import { history } from "./history/history";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage } from "./actions/message";

function App() {
    
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

 


 
  return (


    <div className="App">

      <Router history={history}>
        <Switch>
          <Route exact path="/"  component={UsersComponent}/>
          <Route  path="/add" component={AddUserComponent} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/customer/:id" component={AddUserComponent} />
        </Switch>
      </Router>

    </div>


  );
}

export default App;
