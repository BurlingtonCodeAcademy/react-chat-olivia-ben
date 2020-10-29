import React, { useState } from 'react'
import '../App.css'

const Form = () => {


  return (
    <div>
      <form method="POST" action="/chat">
        <input id="name" type="text" placeholder="enter user name" />
        <input id="message" type="text" placeholder="enter message" />
        <input type="submit" value="send" />
      </form>
    </div>
  )

}

export default Form;
