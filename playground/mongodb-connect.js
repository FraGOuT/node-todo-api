//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err){
    return console.log('Unnable to connect ot MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   test: 'Something to do',
  //   completed: false
  // }, (err, res)=> {
  //   if(err){
  //     return console.log('Insert failed for todo', err);
  //   }
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Himanshu',
  //   age: 21,
  //   location: 'Mumbai'
  // }, (err, res)=> {
  //   if(err){
  //     return console.log('Insert failed for User', err);
  //   }
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  //
  //   console.log(res.ops[0]._id.getTimestamp());
  //
  // });

  db.close();

});
