
function findLargestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i <= numbers.length; i++){
        let element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const ages = [10, 20, 30];
const largest = findLargestElement(ages);
console.log(largest)


