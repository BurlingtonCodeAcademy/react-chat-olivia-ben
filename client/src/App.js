//imports 
import React from "react";
import "./App.css";
import Form from "./components/Form";
import DisplayWindow from "./components/DisplayWindow";
import Allrooms from "./components/Allrooms";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mainroom from "./components/Mainroom";
import Roomone from "./components/Roomone";

//this component holds all necessary components to run and print the app to the user's site
function App() {
  //the component prints a message and two components to the page. Each component holds it's own components or code respectively.
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
