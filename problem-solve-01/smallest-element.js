function findLargestElement(numbers) {
    let smallest = numbers[0];
    for (let i = 0; i <= numbers.length; i++){
        let element = numbers[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}

const ages = [10, 20, 30];
const smallest = findLargestElement(ages);
console.log(smallest);