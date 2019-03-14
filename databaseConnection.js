const mongoose = require('mongoose')

let mydb = `mongodb://mikejanes:password1@ds213896.mlab.com:13896/facefriends`
mongoose.connect(`${mydb}`, { useNewUrlParser: true })

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection successful ');
})

mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err);
})

let faceFriendsSchema = new mongoose.Schema({
  user: 'string',
  picture: 'string',
  description: 'string',
  likes: 'number'
})

let faceFriendsDB = mongoose.model('cards', faceFriendsSchema)

module.exports.faceFriendsDB = faceFriendsDB