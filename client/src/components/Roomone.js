//imports 
import React, { useState } from 'react'
import '../App.css'
import DisplayWindow from './DisplayWindow'


//this component holds the display window that prints all messages written by the user, which are drawn from the Room One database
function Roomone() {
  return (
    <div className="room">
      <p>Room One</p>
      <DisplayWindow />
    </div>
  )
}
//export component to be used elsewhere in React
export default Roomone;
