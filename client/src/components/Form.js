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

    //we need a useEffect hook somewhere (probably app.js... ) to look for new messages every 10 seconds.


  return (
    <div>                         
      <form onSubmit={handleForm} method="POST" action="/send" >
        <input id="name" type="text" placeholder="enter user name" {...bindSender} />
        <input id="message" type="text" placeholder="enter message" {...bindMsg} />
        <input type="submit" value="send" />
      
      </form>
    </div>
  )

}

export default Form;