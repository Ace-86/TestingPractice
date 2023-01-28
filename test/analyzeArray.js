function getAverage(values) {
    return values.reduce((a, b) => a + b, 0) / values.length;
}
// console.log(getAverage([1,2,3,4,5,6,7]))


function findMin(value) {
    if (toString.call(value) !== "[object Array]")
    return false;
    return Math.min.apply(null, value);
}

console.log(findMin([1, 2, 3, 4, 5, 6, 7]));
// findMin();