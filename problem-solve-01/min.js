let num1 = 10, num2 = 20, num3 = 30;
let max = Math.min(num1, num2, num3);
console.log(max);

function min(number1, number2) {
    if (number1 < number2) {
        return number1;
    }
    else {
        return number2;
    }
    
}

let minNumber = min(100, 200);
console.log(minNumber);