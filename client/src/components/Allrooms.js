import React from "react";
import "../App.css";

import { BrowserRouter as Router, Link } from "react-router-dom";

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

export default Allrooms;
