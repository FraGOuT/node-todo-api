//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err){
    return console.log('Unnable to connect ot MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5b0a867bd458691ee3e657ef")
  // },{
  //   $set: {
  //     completed:true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result)=>{
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5b0a440056b4f23610ea54d6")
  }, {
    $set: {
      name: 'Harshita'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  })

  db.close();

});
