const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5b1ca2ddd3cade6b2cebafa8';

if(!ObjectID.isValid(id)){
  return console.log('ID not valied');
}

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

// Todo.findOneAndRemove({
//
// }).then();

Todo.findByIdAndRemove(id).then((todo)=>{
  console.log(todo);
});
