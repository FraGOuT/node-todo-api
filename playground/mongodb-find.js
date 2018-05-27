//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err){
    return console.log('Unnable to connect ot MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({completed: true}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unnable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log('Todos');
  //   console.log('Count', count);
  // }, (err) => {
  //   console.log('Unnable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Himanshu'}).count().then((count) => {
    console.log('Todos');
    console.log('Count', count);
  }, (err) => {
    console.log('Unnable to fetch todos', err);
  });

  db.collection('Users').find({name: 'Himanshu'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined, 2));
  },(err)=>{
    console.log('Unnable to fetch users');
  });

  db.close();

});
