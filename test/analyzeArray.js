const getAverage = (value) => {
    return value.reduce((a, b) => a + b, 0) / value.length;
}
// console.log(getAverage([1,2,3,4,5,6,7]))


const findMin = (value) => {
    if (toString.call(value) !== "[object Array]") //verifies if value is a type of array
    return false;
    return Math.min.apply(null, value);
}

// console.log(findMin([1, 2, 3, 4, 5, 6, 7]));
// findMin();

const findMax = (value) => {
    return Math.max.apply(null, value);
}

// console.log(findMax([1, 2,3,4,5,6,7]))

const findLength = (value) => {
    if(toString.call(value) !== "[object Array]")
    return false
    return value.length
}

// console.log(findLength([1,2,3,4,5,6,7]))

module.exports = {getAverage, findMin, findMax, findLength}
