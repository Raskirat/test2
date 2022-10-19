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
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get("/", function(req,res){
    res.send("<html><h2>Declaration:</h2><p>I acknowledge the College's academic integrity policy - and my own integrity - remain in effect whether my work is done remotely or onsite. Any test or assignment is an act of trust between me and my instructor, and especially with my classmates... even when no one is watching. I declare I will not break that trust.<br><br>Name: <mark>Raskirat Singh Kohli</mark><br><br>Student Number: <mark>149660219</mark><br><br><a href='/CPA'>Click to visit CPA Students</a><br><br><a href='/highGPA'>Click to see who has the highest GPA</a></p></html>");
  });
app.get("/CPA", function(req,res){
    stFunc.getCPA()
    .then((data) => { res.json(data) })
    .catch((err) => { res.json({message: err}) }); 
});
app.get("/highGPA", function(req,res){
    stFunc.highGPA()
    .then((data) => { res.send(`<h2>Highest GPA:</h2><br>Student ID: ${data.studId} <br>Name: ${data.name}<br>Program: ${data.program} <br>GPA: ${data.gpa}`) })
    .catch((err) => { res.json({message: err}) }); 
});
app.get("*", function(req,res){
  res.send("Uh Oh! Error 404: File Not Found");
});
stFunc.prepare()
.then(() => {app.listen(HTTP_PORT, onHttpStart)})
.catch(function(reason){
  console.log(reason);
});