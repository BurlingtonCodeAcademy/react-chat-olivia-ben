//imports 
import React, { useEffect } from 'react'
import { useInput } from '../useInput'
import '../App.css'

const Form = () => {
  //variables for sender and message. they contain a value, bind, and reset option. they start as empty strings.
  const { value: sender, bind: bindSender, reset: resetSender } = useInput('')
  const { value: msg, bind: bindMsg, reset: resetMsg } = useInput('')

  //this function occurs on the submit event of the form below.
  const handleForm = (evt) => {
    //the form does not refresh the page
    evt.preventDefault()
    //define what message is to look like
    let msgSent = {
      sender: sender,
      body: msg,
    }
    //this fetch request sends the user's message to our database collection
    fetch('/chat/sendmessage', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      //this turns the body of the user's message into a JSON object for use by the database collection
      body: JSON.stringify(msgSent)
    }).then(res => res.json())
      //after the message is sent to the database, the message field on the form is cleared
      .then(msgs => {
        resetMsg()
      })
  }
  //below is the form a user uses to write in their name and message to be printed in the display window
  return (
    <div id="form">
      <form onSubmit={handleForm} method="POST" action="/send" >
        <input id="name" type="text" placeholder="enter user name" {...bindSender} />
        <input id="message" type="text" placeholder="enter message" {...bindMsg} />
        <input type="submit" value="send" />

      </form>
    </div>
  )

}
//export component to be used elsewhere in React
export default Form;