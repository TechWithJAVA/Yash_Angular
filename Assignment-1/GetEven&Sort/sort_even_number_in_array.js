function getEvenAndSort(input) {
    var result = input.filter(function (x) { return x % 2 === 0; }).sort();
    return result;
}
var input = [5, 2, 7, 9, 3, 8, 4];
console.log(getEvenAndSort(input));
