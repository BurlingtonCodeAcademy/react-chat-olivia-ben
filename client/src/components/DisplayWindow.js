import React, { useState, useEffect } from 'react'
import '../App.css'

function DisplayWindow() {
  const [msgs, setMsgs] = useState([])
  

  useEffect(() => {
    if (!msgs.length) {
      console.log('searching for messages')
      fetch('/chat/allmessages')
        .then(res => res.json())
        .then(msgs => {
          

          console.log(msgs)
          //turn 'msg' into display-able message

          // let msg = {
          //   sender: sender,
          //   body: body
          // }
          setMsgs(msgs)
        })
    }
  }, [10000])

  return (
    <div id="displaywindow">
      {msgs.map(msg => {
        return <p>{msg.sender + ': ' + msg.body}</p>
      })}
    </div>
  )

}

export default DisplayWindow;
