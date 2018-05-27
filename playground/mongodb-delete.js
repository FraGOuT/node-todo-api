//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err){
    return console.log('Unnable to connect ot MongoDB server');
  }

  console.log('Connected to MongoDB server');

  //delete Many
  // db.collection('Todos').deleteMany({text: 'Eat ice-cream'}).then((result)=>{
  //   console.log(result);
  // });

  //delete one
  // db.collection('Todos').deleteOne({text: 'Eat ice-cream'}).then((result) => {
  //   console.log(result);
  // });

  //find and delete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((doc) => {
  //   console.log(doc);
  // });

  db.collection('Users').deleteMany({name: 'Himanshu'}).then((result)=>{
    console.log(result);
  });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5b0a4452277b2f2e94b8b30f")
  }).then(
    (result)=>{
      console.log(result);
    }
  );


  db.close();

});
