// swap two number ;
// let lemonWater = 10;
// let redWater = 12;
// let containerWater;
// console.log(lemonWater, redWater);
// containerWater = lemonWater;
// lemonWater = redWater;
// redWater = containerWater;
// console.log(lemonWater, redWater);

// using destructuring array

let firstNumber = 100, secondNumber = 200;
console.log(firstNumber, secondNumber);
[firstNumber, secondNumber] = [secondNumber, firstNumber];

console.log(firstNumber, secondNumber);