const { caesar } = require("./ceasar");

test('Ceasar cipher', () => {
  expect(caesar("adam", 1)).toMatch("bebn");
});
test('word is undefined', () => {
  expect(caesar("", 1)).toMatch("");
});
test('no shift in cipher', () => {
  expect(caesar("adam", 0)).toMatch("adam");
});

