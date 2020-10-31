import React, { useState, useEffect } from 'react'
import './App.css'

import Form from './components/Form'
import DisplayWindow from './components/DisplayWindow'

function App() {

  



  return (

    <div className="App">
      <h1>Hello, Chat!</h1>
      <DisplayWindow />
      <Form />



      {/* <Switch>
      <Route exact path="/" component={} />
      <Route path="/Mainroom" component={Mainroom} />
      <Route path="/Allrooms" component={Allrooms} />
      <Route path="/Roomone" component={Roomone} />
      <Route path="/Form" component={Forms} />
      </Switch>
      </Router> */}

    </div>
  );
}

export default App;