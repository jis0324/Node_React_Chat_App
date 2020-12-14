import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import "./index.css";
import Chat from './pages/Chat'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

import socketClient  from "socket.io-client";
const SERVER = "http://127.0.0.1:8000";

function App() {
  var socket = socketClient(SERVER);
  socket.on('updaterooms', () => {
    console.log(`I'm connected with the back-end`);
  });
  
  return (
    <Router>
      <Switch>
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path='/' render={ () => <Redirect to='/chat' /> }/>
      </Switch>
    </Router>
  );
}

export default App;