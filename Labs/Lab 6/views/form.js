let express = require('express');

let app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let port = 3000;

app.get("/favoriteTeam", function(req, res) {
        console.log(req.body.name);
        res.redirect('/')
    })

app.post("/favoriteTeam", function(req, res) {
    console.log(req.body.favoriteTeam);
    res.redirect('/')
})

app.get("/name", function(req, res) {
        console.log(req.body.name);
        res.redirect('/')
    })

app.post("/name", function(req, res) {
    console.log(req.body.name);
    res.redirect('/')
})

app.listen(port, function() {
    console.log("Server running on localhost:3000");

});