/*
Test-1
Name: Raskirat Singh Kohli
Student ID: 149660219
Email: rkohli21@myseneca.ca
URL: https://sore-puce-pocketbook.cyclic.app/
*/
var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var path = require("path");
var stFunc = require("./test2_moduleB")
function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
  }
const exphbs = require("express-handlebars");
app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get("/", function(req,res){
    res.render('home');
  });
app.get("/BSD", function(req,res){
    stFunc.getBSD()
    .then((data) => { res.render('students', {students: data}) })
    .catch((err) => { res.render({message: "No Results"}) }); 
});
app.get("/highGPA", function(req,res){
    stFunc.highGPA()
    .then((data) => { res.render('student', {student: data}) })
    .catch((err) => { res.render({message: "No Results"}) });
});
app.get("/allStudents", function(req,res){
  stFunc.allStudents()
  .then((data) => { res.render('students', {students: data}) })
  .catch((err) => { res.render({message: "No Results"}) });
});
app.get("*", function(req,res){
  res.send("Uh Oh! Error 404: File Not Found");
});
stFunc.prepare()
.then(() => {app.listen(HTTP_PORT, onHttpStart)})
.catch(function(reason){
  console.log(reason);
});