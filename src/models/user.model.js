require('dotenv').config()
let mongoose = require('mongoose')

// const server = "trip-deets-api-c7wl8.mongodb.net"
const server = process.env.SERVER
const user = "symbologic"
const password = process.env.PASSWORD

mongoose.connect(
    `mongodb+srv://${user}:${password}@${server}/test?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useFindAndModify: false }
)
mongoose.set('useCreateIndex', true);

// var schema = new mongoose.Schema({
//     field1:{type:String},
//     subdocArray:[{
//        _id:false,
//        field :{type:String}
//     }]
//  });

let ListSchema = new mongoose.Schema({
    item: {type: String}, 
    completed: {type: Boolean}  
}, { _id : false });

// var parentSchema = new Schema({
//   children: [childSchema]
// })

let UserSchema = new mongoose.Schema({
    name: String,
    email: {
      type: String,
      required: true,
      unique: true
    },
    list: [ListSchema]
  })
  
  module.exports = mongoose.model('User', UserSchema)