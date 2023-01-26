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

//to-do: add test for numbers check
//add test for characters (non-numbers/letters) check
