const DataStore = require('./datastore.js')
require('dotenv').config()
const url = `mongodb+srv://olivianbensdb:${process.env.DBPASS}@cluster0.ocghx.mongodb.net/`



let dataBase = new DataStore(url, "oliviandbensdb", "messages")

//function to display messages 
const displayMsgs = async (req, res) => {
  //set the function action to a variable
  //go to database and retrieve all messages using the getAll function
  let response = await dataBase.getAll()
  res.send(response.data)
  console.log(response)
}

//function for sending message - only to backend right now
const sendMsg = async (req, res) => {
  let msg = req.body.msg
  //console.log(msg)
  let date = new Date().toLocaleDateString()
  //define object for each message sent
  let msgSent = {
    sender: msg.sender,
    body: msg.body,
    recipient: msg.recipient,
    sent: date
  }
  //
  let response = await dataBase.insert(msgSent)
  console.log(response)

  //uncomment additional error handling once you know it works - IT WORKS!

  //error handling - if no errors present, getAll() function will be called to show messages sent already

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

// testing sendMsg function - uncomment when ready to test
sendMsg({
  sender: "Ben",
  body: "Now I'm just thinking about henry street sandwiches and getting hungry...",
  recipient: "Olivia"

})

displayMsgs()