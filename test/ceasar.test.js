const { caesar } = require("./ceasar");

test('ceasar cipher lowercase', () => {
  expect(caesar("adam", 1)).toMatch("bebn");
});
test('word is undefined', () => {
  expect(caesar("", 1)).toMatch("");
});
test('no shift in cipher', () => {
  expect(caesar("adam", 0)).toMatch("adam");
});
test('symbols fail', () => {
  expect(caesar("$%$@", 1)).toMatch("cannot contain symbols")
})
test('numbers fail', () => {
  expect(caesar("2absad2", 1)).toMatch("cannot contain numbers")
})
test('mixed-case', () => {
  expect(caesar("aBcD", 1)).toMatch("bCdE")
})
//to- do: test non-letters
//test capitalization\
//test mixed lower/uppercase
