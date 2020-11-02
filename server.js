//imports and variables
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


//routes
//homepage
app.post('/chat', (req, res) => {
  res.sendFile(path.resolve('./src/app.js'))
})

//mainroom
//send message to database
app.post('/chat/sendmessage', dbFunctions.sendMsg)

//display all messages
app.get('/chat/allmessages', dbFunctions.displayMsgs)


//roomone
app.get('/Roomone', (req, res)  


//listen for the port and print which port the app is running on in the console
app.listen(port, () => {
  console.log('listening on port: ' + port)
})
