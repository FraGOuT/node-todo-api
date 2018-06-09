const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5b0bd52051c3d233606e14bc11';

if(!ObjectID.isValid(id)){
  return console.log('ID not valied');
}

// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('find: '+todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('find one: '+todo);
// });

Todo.findById(id).then((todos)=>{
  if(!todos){
    return console.log('Id not found');
  }
  console.log('find by id: '+todos);
}).catch((e)=>console.log(e));
