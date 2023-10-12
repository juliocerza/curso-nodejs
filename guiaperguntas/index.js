const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public')) // arquivos estaticos em public

app.get("/", (req, res) => {
    
    res.render("index.ejs");
});

app.get("/toask", (req, res) => {
    
    res.render("Toask.ejs");
})







app.listen(8080, (error) => {
    if (error){
        console.log("Failed")
    } else {
        console.log("Success")
    }
});