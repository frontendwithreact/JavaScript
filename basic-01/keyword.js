// JavaScript Let
// Cannot be Redeclared
// let x = "John Doe";
// let x = 0;

// SyntaxError: 'x' has already been declared

// Block Scope
// {
//   let x = 2;
// }
// // x can NOT be used here

// carname = "Halim";
// let carname;


// console.log(carname);

// try {
//     carName = "Karim";
//     let carName = "k";
// } catch (error) {
//     console.log(error);
// }

// JavaScript Const
//Cannot be Reassigned
// Cannot be Redeclared

// const PI = 3.141592653589793;
// PI = 3.14;      // This will give an error
// PI = PI + 10;   // This will also give an error

// const cars = ["Saab", "Volvo", "BMW"];

// cars[0] = 'Bike';
// console.log(cars);
// cars.push('Halim');
// console.log(cars);

// cars.pop();
// console.log(cars);

//Constant Objects
// Can change the property
// Can add new property

// const car = {
//     type: 'Fiat', // key:value or property:value
//     model: '500',
//     color: 'white'
// }

// car.color = 'red';
// console.log(car);
// car.owener = 'Abdul Halim';
// console.log(car);


const a = 10;
{
    const a = 12;
    console.log(a);
}

console.log(a);