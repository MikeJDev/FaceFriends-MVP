const mongoose = require('mongoose')

let mydb = `mongodb://mikejanes:password1@ds213896.mlab.com:13896/facefriends`
mongoose.connect(`${mydb}`, { useNewUrlParser: true })

let gutsySchema = new mongoose.Schema({
  user: 'string',
  picture: 'string',
  description: 'string',
  likes: 'number'
})

let Gutsydb = mongoose.model('Gutsydb', gutsySchema)

module.exports.Gutsydb = Gutsydb