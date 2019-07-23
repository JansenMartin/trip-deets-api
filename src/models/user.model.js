require('dotenv').config()
let mongoose = require('mongoose')

const server = process.env.SERVER
const user = process.env.USER
const password = process.env.PASSWORD

mongoose.connect(
    `mongodb+srv://${user}:${password}@${server}/test?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
)
mongoose.set('useCreateIndex', true);

let UserSchema = new mongoose.Schema({
    name: String,
    email: {
      type: String,
      required: true,
      unique: true
    }
  })
  
  module.exports = mongoose.model('User', UserSchema)