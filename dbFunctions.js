// const { Mongoose } = require('mongoose')

const DataStore = require('./datastore')
const url = "mongodb+srv://olivianbensdb:DBPASS@cluster0.ocghx.mongodb.net/<dbname>?retryWrites=true&w=majority"
 
let myDb = new DataStore(url, "olivianbensdb", 'chatapp')



const write = async (req, res) => {
  //access user so app remembers who is sending message
  //we'll need to access form inputs - input.user, input.textContent(?), etc.
}