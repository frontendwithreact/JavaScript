// Fahrenheit to Celsius
// Celsius to Fahrenheit:   °C × 1.8 + 32 = °F
// Fahrenheit to Celsius:   (°F − 32) / 1.8 = °C

// Example: Convert 98.6° Fahrenheit to Celsius (again)
// First: 98.6° − 32 = 66.6
// Then: 66.6 / 9 = 7.4
// Then: 7.4 × 5 = 37° C

function farenheitToCelsius(farenheit) {
    const zeroCelsius = 32;
    let showResult = (farenheit - zeroCelsius) * 5 / 9;
    return showResult;
}

let celsius = farenheitToCelsius(98.6);
console.log("Fahrenheit To Celsius : " + celsius);