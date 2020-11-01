//imports
//maybe not needed anymore since it's in the dbFunctions file?
require("dotenv").config();

const dbFunctions = require('./dbFunctions')
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')
const { response } = require('express')
const port = process.env.PORT || 8000;
const app = express();
const staticDir = process.env.DEV ? "./client/public" : "./client/build";

//set static file system
app.use(express.static(staticDir));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//database
// const DataStore = require('./datastore.js')
// let dataBase = new DataStore(url, "oliviandbensdb", "messages")

//routes
//homepage
// app.post('/chat', (req, res) => {
//   res.sendFile(path.resolve('./src/app.js'))
// })
//send message to database
app.post('/chat/sendmessage', dbFunctions.sendMsg)

//display all messages
app.get('/chat/allmessages', dbFunctions.displayMsgs)

app.listen(port, () => {
  console.log('listening on port: ' + port)
})

//handle logic and moving data around