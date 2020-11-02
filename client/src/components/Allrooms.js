//imports
import React from "react";
import "../App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

//this component links to two chat room components; Main Room and Room One. Users can click to select which they'd like to use.
function Allrooms() {

  return (
    <div id="allrooms">
      <h3>All Rooms</h3>
      <Link to="./Mainroom">Main Room</Link>
      <br />
      <Link to="./Roomone">Room One</Link>
    </div>
  );
}
//export component to be used elsewhere in React
export default Allrooms;
