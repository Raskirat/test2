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

exports.getCPA = function(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Get All CPA Students");
            var temp;
            const cpaList = [];
            for(cpa of studentInfo){
                if(cpa.program == "CPA"){
                    temp = cpa;
                    cpaList.push(temp);
                }
            }
            resolve(cpaList);
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