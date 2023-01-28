function getAverage(values) {
    return values.reduce((a, b) => a + b, 0) / values.length;
}
// console.log(getAverage([1,2,3,4,5,6,7]))


function findMin(value) {
    if (toString.call(value) !== "[object Array]") //verifies if value is a type of array
    return false;
    return Math.min.apply(null, value);
}

console.log(findMin([1, 2, 3, 4, 5, 6, 7]));
// findMin();

function findMax(value) {
    return Math.max.apply(null, value);
}

console.log(findMax([1, 2,3,4,5,6,7]))

function findLength(value) {
    if(toString.call(value) !== "[object Array]")
    return false
    return value.length
}

console.log(findLength([1,2,3,4,5,6,7]))
