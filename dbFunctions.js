//imports and variables
require('dotenv').config()
//import our datastore file for use by methods beloew
const DataStore = require('./datastore.js')
//database connection
const url = `mongodb+srv://olivianbensdb:${process.env.DBPASS}@cluster0.ocghx.mongodb.net/`

//creating database as new instance of DataStore 
let dataBase = new DataStore(url, "oliviandbensdb", "messages")

//function to display messages 
const displayMsgs = async (req, res) => {
  //set the function action to a variable
  //go to database and retrieve all messages using the getAll function
  let response = await dataBase.getAll()
  res.send(response.data)
  console.log(response)
}

//function for sending message to the chat window
const sendMsg = async (req, res) => {
  //get the contents of the user's message and set it to a variable
  let msg = req.body
  //set the time and date of when the message was sent to a variable
  let date = new Date().toLocaleDateString()
  //define object for each message sent
  let msgSent = {
    sender: msg.sender,
    body: msg.body,
    sent: date
  }
  //this is the action of inserting the user's message and info to the collection database
  let response = await dataBase.insert(msgSent)
  
  //error handling - if no errors present, getAll() function will be called to show messages sent 
  if (response.status === 'ok') {
    let messages = await dataBase.getAll()
    //if no errors in response AND no errors in messages, proceed with action to DB
    if (messages.status === 'ok') {
      res.status(200).send(messages.data)
    } else {
      res.status(400).send(messages.error)
    }
  } else {
    res.status(400).send(messages.error)
  }
}



//export functions to be used in server
module.exports = {
  displayMsgs: displayMsgs,
  sendMsg: sendMsg
}
