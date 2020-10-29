//import mongo and mongoose
const { MongoClient, ObjectId } = require('mongodb')
const { mongoose } = require('mongoose')

//establish connection to db
mongoose.connect(/* database name */)
//reference db connection
let myDB = mongoose.connection

//error handling
myDb.on('error', console.error.bind(console, 'Connection error: '))

//generate schema
const messageSchema = new mongoose.Schema({
  date: Date,
  name: String,
  body: String,
})

const roomSchema = new mongoose.Schema({
  date: Date,
  body: String,
})

const house = new mongoose.Schema({
  date: Date,
  rooms: Array,
})


async function run() {
  //generate model based on schema
  const Message = mongoose.model('User', messageSchema)


}

//this "method" will print all messages for the user
const getAllMessages = async (req, res) => {
  //ask user if they want all messages
  //if yes, print all messages
  //if no, ..?
}

//the below "method" will send user input to the db
//it might also then print to our chatbox? but maybe thats a separate method
const sendMessage = async (req, res) => {
  //get user name
  //get user input (ie. message)
  //send input to db
  //print input to chatbox
}

//parsing the data