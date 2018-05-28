var mongoose = require('mongoose');

var User = mongoose.model('Users',{
  email: {
    type: String,
    required: true,
    trim: true,
    minLength: 1
  }
});

module.exports = {
  User
};

// var user = new User({
//   email: 'hi@hi.com'
// });
//
// user.save().then((doc)=>{
//   console.log(doc);
// }, (err)=>{
//   console.log(err);
// });
