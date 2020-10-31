import React, { useState, useEffect } from 'react'
import '../App.css'

function DisplayWindow() {
  const [msgs, setMsgs] = useState(null)

  useEffect(() => {
    if (!msgs) {
      console.log('searching for messages')
      fetch('/chat/allmessages')
        .then(res => res.json())
        .then(msgs => {
          console.log(msgs)
          setMsgs(msgs)
        })
    }
  }, [1000])

  return (
    <div id="displaywindow">
      
    </div>
  )

}

export default DisplayWindow;
