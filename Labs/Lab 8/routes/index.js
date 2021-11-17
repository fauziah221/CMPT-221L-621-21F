let express = require('express');
let route = express.Router();

route.get("/", function (req, res) {
    res.render('index')
})

module.exports = route;