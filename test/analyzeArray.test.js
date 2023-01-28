
const check = require("./analyzeArray");

test('find the average', () => {
    expect(check.getAverage([1,8,3,4,2,6])).toEqual(4);
  });
  test('find the minimum', () => {
    expect(check.findMin([1,8,3,4,2,6])).toBe(1);
  });
  test('find the max', () => {
    expect(check.findMax([1,8,3,4,2,6])).toEqual(8);
  });
  test('find the length', () => {
    expect(check.findLength([1,8,3,4,2,6])).toBe(6);
  });
  
  