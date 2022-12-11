//https://www.mathsisfun.com/temperature-conversion.html
//Convert 25° Celsius (a nice warm day) to Fahrenheit

// Example: Convert 25° Celsius (a nice warm day) to Fahrenheit
// First: 25° / 5 = 5
// Then: 5 × 9 = 45
// Then: 45 + 32 = 77° F

// Celsius to Fahrenheit:   °C × 1.8 + 32 = °F

// First: 25° / 5 = 5
// Then: 5 × 9 = 45
// Then: 45 + 32 = 77° F


function celsiusToFahrenheit(celsius) {
    const fahrenHeit = 32;
    let showResult = (celsius * 9 / 5) + fahrenHeit;
    return showResult;
}
let fahrenHeit = celsiusToFahrenheit(25);
console.log("Fahrenheit Temparature : "+fahrenHeit);