let UserModel = require('../models/user.model')
let express = require('express')
let router = express.Router()

//CREATE a new user
//localhost:3000/user
router.post('/user', (req, res) => {
    if(!req.body) {
      return res.status(400).send('Request body is missing')
    }

  //Incoming user object will look like this:
  // let user = {
  //   name: 'firstname lastname',
  //   email: 'email@gmail.com'
  // }
  
    let model = new UserModel(req.body)
    console.log(model);
    model.save()
      .then(doc => {
        if(!doc || doc.length === 0) {
          return res.status(500).send(doc)
        }
  
        res.status(201).send(doc)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  module.exports = router