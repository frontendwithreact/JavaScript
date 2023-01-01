https://www.mathsisfun.com/leap-years.html
// reference 

function getLeapyear(year) {
    if (year % 4 == 0 && year % 100 != 0) {
        console.log("This is leap year : " + year);
    }
    else{
        console.log(year + " this is not leap year");
    }
    return year;
}

getLeapyear(2022);
