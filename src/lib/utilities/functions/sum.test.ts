import sum from "./sum"

test('Properly sums two numbers', () => {
  expect(sum(2, 3)).toBe(5)
})