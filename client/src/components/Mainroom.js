//imports 
import React from 'react'
import '../App.css'
import DisplayWindow from './DisplayWindow'

//this component holds the display window that prints all messages written by the user, which are drawn from the Main Room database
function Mainroom() {

  return (
    <div className="room">
      <p>Main Room</p>
      <DisplayWindow />

    </div>
  )
}
//export component to be used elsewhere in React
export default Mainroom;
