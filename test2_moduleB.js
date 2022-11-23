var studentInfo = [];
var randomTime = Math.floor(Math.random() * 3000) + 1;
exports.prepare = function(){
    const fs = require('node:fs');
    fs.readFile('./students.json',(err,data)=>{
        if (err) reject("Failure to read file employees.json!");
        studentInfo = JSON.parse(data);
    });
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Initialize");
            resolve("Data succesfully initialized!");
        },randomTime);
    });
}

exports.getBSD = function(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Get All BSD Students");
            var temp;
            const BSDList = [];
            for(BSD of studentInfo){
                if(BSD.program == "BSD"){
                    temp = BSD;
                    BSDList.push(temp);
                }
            }
            resolve(BSDList);
        },randomTime);
    });
}

exports.highGPA = function(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Get Highest GPA Student");
            var highest, gpa = 0;
            for(cpa of studentInfo){
                if(cpa.gpa > gpa){
                    highest = cpa;
                    gpa = cpa.gpa;
                }
            }
            resolve(highest);
        },randomTime);
    });
}

exports.allStudents = function(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Get All Students");
            var temp;
            const List = [];
            for(cpa of studentInfo){
                    temp = cpa;
                    List.push(temp);
            }
            resolve(List);
        },randomTime);
    });
}