// Purpose of mongoose: "Mongoose provides a straight-forward, schema-based solution to model your application data." 
// https://mongoosejs.com/

const mongoose = require('mongoose');

//add the built-in promise library  - mongoose supports _callbacks_ by default
//"promises are easier to chain and scale"
mongoose.Promise = global.Promise;

// below checks if process.env.MONGODB_URI exisits (i.e. is the app running on Heroku) if not, defaults to the localhost URL
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/SchruteFarms', {useMongoClient: true}).then( () => {
  console.log('Mongoose is connected to the MongoDB server');
}, (e) => {
  console.log('Mongoose is unable to connect to the server', e);
});

module.exports = {mongoose};