const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.json({"name": "Julio", "id": "1"})//send("Welcome!");
});


//captura o paramatro (id ou nome) fornecido pelo usuario
app.get("/Hello/:id/:name?", (req, res) => {
    let Id = req.params.id
    let Name = req.params.name
    if(Name){
        res.send(`The id of ${Name} is ${Id}`)
    } else {
        res.send(`The id is ${Id}`)
    }
});


//last todo
app.listen(4000, (error) => {
    if(error){
        console.log("An error has occurred!")
    } else {
        console.log("The Server started successfully!")
    }
});