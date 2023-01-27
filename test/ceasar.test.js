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

//to- do: test non-letters
//test capitalization\
//test mixed lower/uppercase
