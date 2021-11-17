let express = require('express');
let route = express.Router();
let student = require('./models/student');

route.get("/student", function (req, res) {
    res.render('student')
})

route.post("/student", function (req, res) {
    
    student.create(req.body.student, function (err, student) {
        if (err) {
            console.error(err);
        } else {
            res.redirect('/student/student');
        }
    })
    
})

module.exports = route;
