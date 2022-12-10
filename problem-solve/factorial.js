// Find the factorial of number;

// let factorial = 1;
// for (let i = 1; i <= 5; i++){
//     factorial = factorial * i;
//     console.log(factorial);
// }


// function findFactorials(number) {
//     let factorial = 1;
//     for (let i = 1; i <= number; i++){
//         factorial = factorial * i;
//     }
//     return factorial;
// }

// let firstNumber = findFactorials(10);
// console.log(firstNumber);

// let secondNumber = findFactorials(4);
// console.log(secondNumber);

function findFactorials(number) {
    let factorial = 1;
    let init = 1;
    while ( init <= number) {
        factorial = factorial * init;
        // init++;
        init = init + 1;
    }
    return factorial;
}

let firstNumber = findFactorials(5);
console.log(firstNumber);