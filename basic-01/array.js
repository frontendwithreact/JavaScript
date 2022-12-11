
const cars = [
    "Saab",
    "Volvo",
    "BMW",
    120,
    Date.now(),
    myFunction(),
    myCars
]
const bnpConference = ["Mirza Fokrul", "Mirza Abbas", "Tarek", "Romin Farhana", "Andalib Rahman ", "Mohiuddin Khan"];
function myCars() {
    
}
function myFunction() {
    
}

let car = cars[0];
console.log(car);

// array index start with 0
cars[0] = "Motor Bik";
console.log(cars[0]);

console.log(cars.length);

// Associative array?
const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length;    // Will return 3
person[0];        // Will return "John"


// const points = new Array();
// const points = [];

// const points = new Array(40, 100, 1, 5, 25, 10);
// const points = [40, 100, 1, 5, 25, 10];

// const fruits = ["Banana", "Orange", "Apple"];
// let type = typeof fruits;

// Array.isArray(fruits);