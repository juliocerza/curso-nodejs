const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const connection = require("./database/db");
const askModel = require('./database/Question')
const answerModel = require('./database/Answer')
connection.authenticate().then(() => {
    console.log("Connected to database!")
}).catch((e) => {
    console.log(e)
}); // estrutura chamada promise




app.set('view engine', 'ejs');
app.use(express.static('public')) // arquivos estaticos em public
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    askModel.findAll({row: true, order: [
        ['id', 'DESC']
    ]}).then(ask => {
        res.render("index.ejs", {
            asks: ask
        })
    })
   
});

app.get("/toask", (req, res) => {
    
    res.render("Toask.ejs");
});

app.post("/saveask", (req, res) => {
    let title = req.body.title
    let description = req.body.description
    askModel.create({
        title: title,
        description: description
    }).then(() => {
        res.redirect('/')
    })
});

app.get('/toask/:id', (req, res) => {
    let id = req.params.id
    askModel.findOne({
        where: {id: id}
    }).then(ask => {
        if(ask != undefined){
            answerModel.findAll({
                where: {perguntaId: ask.id},
                order: [['id', 'DESC']]
            }).then(respostas => {
                res.render('ask.ejs', {
                    ask: ask,
                    respostas: respostas
                })
            })
        } else {
            res.redirect('/')
        }
    })
});

app.post('/responder', (req, res) => {
    let corpo = req.body.corpo
    let perguntaId = req.body.pergunta
    answerModel.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        res.redirect(`/toask/${perguntaId}`)
    })
});

app.listen(8080, (error) => {
    if (error){
        console.log("Failed")
    } else {
        console.log("Success")
    }
});