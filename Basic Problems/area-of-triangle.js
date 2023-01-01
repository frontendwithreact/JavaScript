// When All Sides are Known
// s = (a+b+c)/2
// area = √(s(s-a)*(s-b)*(s-c))

// area = (base * height) / 2

// Calculate the triangle

function calculatTriangle(height, base) {
    let area = (height * base)/2;
    return area;
}

let areaOfTriangle = calculatTriangle(6, 4);
console.log(areaOfTriangle);