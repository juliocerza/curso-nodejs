const express = require("express");
const app = express();
app.set('view engine', 'ejs');

app.get("/:nome/:lang", (req, res) => {
    let name = req.params.nome
    let lang = req.params.lang
    let media = (0.6 + 4.5)/2.0
    res.render("index.ejs", {
        nome: name,
        lang: lang,
        number: 100,
        media: media.toFixed(1)
    })
});








app.listen(8080, (error) => {
    if (error){
        console.log("Failed")
    } else {
        console.log("Success")
    }
});