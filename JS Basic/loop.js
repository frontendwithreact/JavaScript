// let num = 0;
// while (num < 10) {
//     console.log(num);
//     num = num + 1;
// }
//  console.log("This is for loop");
// for (let i = 0; i < 10; i++){
   
//     console.log(i);
// }


// var num = 0;
// let text = "";
// do {
//    text = "This do while loop " + num;
//     num++;
//     console.log(num);
// }
// while (num < 10);

// let cars = ["Bike", "Bus", "Cycle", "Ricksha", "Tempo", "Auto"];

// for (let car = 0; car < cars.length; car++){
//     console.log(cars[car]);
// }

const person = {
    fname: "John",
    lname: "Doe",
    age: 25
};

let text = "* ";
for (let x in person) {
    text = text + person[x];
    console.log(text);
    
}

// for in over arrays

const students = ["Abdul", "Halim", "Kamal", "Farid", "Rahim"
];
let result;
for (let arr in students) {
    result = students[arr];
    console.log(result);
}

let name = "Abdul Halim";
let a = "";
for (let x of name) {
    a += x;
    console.log(a);
}

