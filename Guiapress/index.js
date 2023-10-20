const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/db')

//view engine
app.set('view engine', 'ejs')

//body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//database
connection.authenticate().then(() => {
    console.log("Connected")
}).catch((error) => {
    console.log(error)
})

//static
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(8080, () => {
    console.log("The server is running...")
})