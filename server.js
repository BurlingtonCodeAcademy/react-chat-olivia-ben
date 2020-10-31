require("dotenv").config();
const express = require("express");
const path = require("path");

const port = process.env.PORT || 5000;
const app = express();
const staticDir = process.env.DEV ? "./client/public" : "./client/build";

app.use(express.static(staticDir));


//let myDb = new DataStore(` mongodb+srv://olivianbensdb:${process.env.DBPASS}@cluster0.ocghx.mongodb.net/<dbname>?retryWrites=true&w=majority`, 'olivianbensdb',  //collName 
//app.get('/chat/allmessages', dbFunctions.getAllMessages)
//app.post('/chat/sendMessage', dbFunctions.sendMessage)

app.post('/chat', (req, res) => {
  res.sendFile('/src/app.js')
})


app.listen(port, () => {
  console.log('listening on port: ' + port)
})

//handle logic and moving data around