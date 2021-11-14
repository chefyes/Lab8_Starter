// sum.test.js
function sum(n1, n2) {
  return n1 + n2;
}

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});