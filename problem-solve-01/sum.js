// let sum = 0;
// for (let i = 0; i <= 5; i++){
//     console.log(i);
//      sum = sum + i;
   
// }
// console.log("Total number of executed for loop");
//  console.log(sum);



// const nubmers = [10, 29, 20, 11, 21, 99, 20];
// let sum = 0;
// for (let i = 0; i < nubmers.length; i++){
//     const element = nubmers[i];
//     sum += element;
// }
// console.log(sum);


function calculatTotalNumber(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum += element;
    }
    return sum;
}

let showResult = calculatTotalNumber([10, 20, 30]);
console.log(showResult);