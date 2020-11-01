//import mongo and mongoose
const { MongoClient, ObjectId } = require('mongodb')

//create our class to be used for different chatrooms
class DataStore {
  constructor(dbUrl, dbName, dbCollection) {
    this.dbUrl = dbUrl;
    this.dbName = dbName;
    this.dbCollection = dbCollection;
    this.dbClient = null;
  }

  //set up client, which will be talking to the db
  async client() {
    //check if client is there
    if (this.dbClient && this.dbClient.isConnected()) {
      //stay connected
      return this.dbClient
    } else {
      //get connected and print db connection name to console
      console.log(`Connecting to ${this.dbUrl}`)
      this.dbClient = await MongoClient.connect(this.dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log('Connected to the database')
      
      return this.dbClient
    }
  }

  //set up collection, from which data will come
  async collection() {
    
    const client = await this.client()
    const database = client.db(this.dbName)
    const collection = database.collection(this.dbCollection)
  
     return collection
  }

  //add a document to the collection
  async insert(object) {
    console.log(object)
    //establish response variable and set fields to empty
    //these will be changed depending on the method's action
    let response = { status: null, error: null }
    //then run this code
    try {
      //get collection from db
      let collection = await this.collection()
      //send update to programmer via console
      console.log('inserting item...')
      //insert the item to the collection via the insertOne method
      await collection.insertOne(object)
      //send update to programmer via console
      console.log('item successfully added')
      //set response status to okay from null (above)
      response.status = 'ok'
      //else, if the code doesn't run,
    } catch (error) {
      //send response error to console
      response.error = error.toString()
      console.log(error.toString())
    }
    return response
  }

  //get all items from the collection and set to variable
  async getAll() {
    let response = { status: null, error: null, data: null }
    //create an index array
    let items = []
    try {
      let collection = await this.collection()
      //look through all items in collection and for each item found, push it to the item array established above
      await collection.find({}).forEach((item) => items.push(item))
      response.status = "ok"
      //set item array to response.data variable
      response.data = items;
    } catch (error) {
      response.error = error.toString()
      console.log(error)
    }
    //return the array
    return response
  }

  //get one item to collection and set to variable
  //this method takes an object's unqiue id as an argument
  async getOne(id) {
    let response = { status: null, error: null, data: null }
    try {
      //search through collection 
      let collection = await this.collection()
      //look for a specific item using it's unqiue id, which was passed in as an argument
      let item = await collection.findOne({ _id: ObjectId(id) })
      response.status = "ok"
      //set item to response.data variable
      response.data = item;
    } catch (error) {
      response.error = error.toString()
      console.log(error)
    }
    //return the item
    return response
  }

  //update an item
  //this method takes in an object's unique id and an update field
  async update(id, updateObject) {
    let response = { status: null, error: null, data: null }
    try {
      //search through collection
      let collection = await this.collection()
      //find a specific item via it's unique id and then update the field key:value pair via atomic operator $set
      await collection.updateOne({ _id: ObjectId(id) }, { $set: updateObject })
      //send update to programmer via console
      console.log('update successful')
      response.status = 'ok'
    } catch (error) {
      response.error = error.toString()
      console.log(error)
    }
    return response
  }

  //remove an item
  async delete(id) {
    let response = { status: null, error: null, data: null }
    try {
      //search through collection
      let collection = await this.collection()
      //find specific item via it's unique id and then delete it
      await collection.deleteOne({ _id: ObjectId(id) })
      //send update to programmer via console
      console.log('item succesfully deleted')
      response.status = 'ok'
    } catch (error) {
      response.error = error.toString()
      console.log(error)
    }
    return response
  }
}

module.exports = DataStore

