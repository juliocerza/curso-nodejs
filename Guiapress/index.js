const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/db');

const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');

const Article = require('./articles/Article');
const Category = require('./categories/Category');

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
});

app.use('/', categoriesController);
app.use('/', articlesController);

//static
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(8080, () => {
    console.log("The server is running...")
})