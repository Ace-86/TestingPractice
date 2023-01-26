const {reverseString} = require("./reverse");

test('Reverse the String', () => {
  expect(reverseString("foo")).toBe("oof");
});
test('Does not contain string', () => {
    expect(reverseString("")).toBe("");
});
test('String contains null', () => {
    expect(reverseString(null)).toBe("");
})