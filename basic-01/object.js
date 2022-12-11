const { ClickAwayListener } = require("@mui/material");

// JavaScript Objects
let car = {
    type: 'Fiat',
    model: '500',
    color: 'white'
}

// Object Definition

const person = {
    firstName: 'Halim',
    lastName: 'Mahmud',
    age: '50',
    eyeColor: 'blue',
    skiColor: 'black'
}
const course = {
    coursCode: 101,
    courseTitle: 'Computer Fandamental',
    courseCredit: 3.5,
}
const department = {
    deptName: "CSE",
    deptHead: "Fahmida Miss",
    deptRegister: "Kamal Sir"
}
// Accessing Object Properties

console.log(department['deptHead']);
console.log(department.deptName);

// Object Methods
let classSix = {
    nickName: "Karim",
    sureName: "Rafi",
    studentId: 29239,
    studentCourse: "English",
    fullName: function () {
        return this.nickName + " " + this.sureName;
    }
}
// let seefullName = classSix.fullName();
let seefullName = classSix.fullName;
console.log(seefullName);
// call();
// apply();
// bind();
// onclick event
//onmousehover event
