const { caesar } = require("./ceasar");

test('Ceasar cipher', () => {
  expect(caesar("adam", 1)).toMatch("bebn");
});

