const DataStore = require('./datastore.js')
const url = 'mongodb+srv://olivianbensdb:DBPASS@cluster0.ocghx.mongodb.net/oliviandbensdb?retryWrites=true&w=majority'


let dataBase = new DataStore(url, 'oliviandbensdb', 'chat-app')

//function to display messages 
const displayMsgs = async (req, res) => {
  let 
}



//function for sending message - only to backend right now
const sendMsg = async (req, res) => {
  let msg = req.body.msg
  let date = new Date().toLocaleDateString()
  //define object for each message sent
  let msgSent = {
    sender: msg.sender,
    body: msg.body,
    recipient: msg.recipient,
    sent: date,
  }

  let response = await dataBase.insert(msgSent)
  console.log(response)
  //error handling - if no errors present, getAll() function will be called to show messages sent already
  if (response.status === 'ok' ) {
    let messages = await dataBase.getAll()
    //if no errors in response AND no errors in messages, proceed with action to DB
    if (messages.status === 'ok' ) {
      res.status(200).send(messages.data)
    } else {
      res.status(400).send(messages.error)
    }
  } else {
    res.status(400).send(messages.error)
  }
}
//testing sendMsg function - uncomment when ready to test
// sendMsg({
//   sender: "Ben",
//   body: "Hey! Hope this works...",
//   recipient: "Olivia"
// })

