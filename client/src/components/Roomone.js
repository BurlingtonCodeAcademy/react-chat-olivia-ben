import React, { useState } from 'react'
import '../App.css'

import DisplayWindow from './DisplayWindow'

function Roomone() {
  return (
    <div className="room">
      <p>Room One</p>
      <DisplayWindow />
    </div>
  )
}

export default Roomone;
