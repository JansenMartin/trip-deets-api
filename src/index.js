let express = require('express')
let app = express()
let userRoute = require('./routes/user')
let path = require('path')
let bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
    console.log("This is a test console statement")
    next()
  })

app.use(userRoute)
app.use(express.static('public'))


// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
    res.status(404).send('We think you are lost!')
})

// Handler for Error 500
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.sendFile(path.join(__dirname, '../public/500.html'))
})

// Heroku supposedly assigns the PORT dynamically
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.info(`Server has started on ${PORT}`));