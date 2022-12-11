// Grade Calculation -------------------------------

function calculateGrade(mark) {
    switch (true) {
    case mark >= 80 && mark <= 99:
        console.log("A+");
        break;
    case mark >=70 && mark <= 79:
        console.log("A");
        break;
    case mark >= 60 && mark <= 69:
        console.log("A-");
        break;
    case mark >= 50 && mark <= 59:
        console.log("B");
        break;
    case mark >= 45 && mark <= 49:
        console.log("C");
        break;
    case mark >= 33 && mark <= 44:
        console.log("D");
        break;
    default:
        console.log("F");
    }
    return mark;
}

calculateGrade(44);
calculateGrade(80);
calculateGrade(76);
calculateGrade(54);
calculateGrade(22);
