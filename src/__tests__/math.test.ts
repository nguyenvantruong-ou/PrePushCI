// src/__tests__/math.test.ts
const sum = (a: number, b: number): number => a + b;

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds -1 + 1 to equal 0", () => {
  expect(sum(-1, 1)).toBe(0);
});
