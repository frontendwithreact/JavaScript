// Function is a block of code. It perform particular task when it's called or invoked.

// multiply two number

function multiplyTwoNumber() {
    let number1 = 10;
    let number2 = 2;
    let mul = number1 * number2;
    return mul;
}
console.log(multiplyTwoNumber());


function addTwoNumber(n1, n2) {
    return n1 + n2;
}

let result = addTwoNumber(10, 30);
console.log(result);

// conver fahrenheit to Celsius

function toCelesius(fahrenheit) {
    let celsius = (5 / 9) * (fahrenheit - 32);
    return celsius;
}

let conversionResult = toCelesius(90);
console.log(conversionResult);