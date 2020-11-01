//import React, { useState, useEffect } from 'react'
import './App.css'

import Form from './components/Form'
import DisplayWindow from './components/DisplayWindow'

function App() {


//we might wind up putting code here and passing to our components via props

  return (

    <div className="App">
      <h1>Hello, Chat!</h1>
      <DisplayWindow />
      <Form />
    </div>
  );
}

export default App;