import React from "react";
import "./App.css";

import Form from "./components/Form";
import DisplayWindow from "./components/DisplayWindow";
import Allrooms from "./components/Allrooms";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mainroom from "./components/Mainroom";
import Roomone from "./components/Roomone";

function App() {
  //we might wind up putting code here and passing to our components via props

  return (
    <Router>
      <div id="app">
        <div id="container">
          <h1>Hello, Chat!</h1>
          <Allrooms />
          <Form />

          <Switch>
        <Route path="/Mainroom" component={Mainroom} />
        <Route path="/Roomone" component={Roomone} />
      </Switch>
        </div>
      </div>
  


    </Router>
  );
}

export default App;
