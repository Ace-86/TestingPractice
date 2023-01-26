function reverseString(string) {
    if (!string) {
        return ""
    } if (string == null) {
        return ""
    } else {
        return string.split("").reverse().join("")
    }
}
// console.log(reverseString("foo"));


module.exports = { reverseString };