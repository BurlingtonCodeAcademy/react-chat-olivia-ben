import React, { useEffect } from 'react'
import '../App.css'

import { useInput } from '../useInput'

const Form = () => {
  // const [msgs, setMsgs] = useState(null)
  const { value: sender, bind: bindSender, reset: resetSender } = useInput('')
  const { value: getter, bind: bindGetter, reset: resetGetter } = useInput('')
  const { value: msg, bind: bindMsg, reset: resetMsg } = useInput('')

  const handleForm = (evt) => {
    evt.preventDefault()
    console.log(sender, msg)
    let msgSent = {
      sender: sender,
      body: msg,
      recipient: getter
    }
    console.log(msgSent)
    fetch('/chat/sendmessage', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(msgSent)
    }).then(res => res.json())
      .then(msgs => {
        console.log(msgs)
        resetMsg()
      })
  }

  const handleReset = (evt) => {
    resetSender()
    resetGetter()
    resetMsg()

    console.log('reset')
  }

  useEffect(() => {
    if (sender) {
      console.log('theres a sender')
    } else {
      console.log('theres not a sender')
    }
  }, [1000])


  return (
    <div>
      <form method="POST" action="/chat" onSubmit={handleForm}>
        <input id="name" type="text" placeholder="enter user name" {...bindSender} />
        <input id="name" type="text" placeholder="enter recipient name" {...bindGetter} />
        <input id="message" type="text" placeholder="enter message" {...bindMsg} />
        <input type="submit" value="send" />
        <br />
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  )

}

export default Form;
