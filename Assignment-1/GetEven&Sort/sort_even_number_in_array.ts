
function getEvenAndSort(input: number[]) {

    let result = input.filter(x => x % 2 === 0).sort();

    return result;
}

const input = [5, 2, 7, 9, 3, 8, 4];
console.log(getEvenAndSort(input))