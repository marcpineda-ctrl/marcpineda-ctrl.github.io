const { countWords } = require("./script.js");

test("counts a single word correctly", () => {
  const result = countWords("hello");
  expect(result[0][0]).toBe("hello");
  expect(result[0][1]).toBe(1);
});

test("counts repeated words correctly", () => {
  const result = countWords("the cat sat on the mat");
  const wordMap = Object.fromEntries(result);
  expect(wordMap["the"]).toBe(2);
  expect(wordMap["cat"]).toBe(1);
});

test("is case insensitive", () => {
  const result = countWords("Hello hello HELLO");
  expect(result[0][0]).toBe("hello");
  expect(result[0][1]).toBe(3);
});

test("sorts by frequency highest first", () => {
  const result = countWords("a a a b b c");
  expect(result[0][0]).toBe("a");
  expect(result[0][1]).toBe(3);
  expect(result[1][0]).toBe("b");
  expect(result[1][1]).toBe(2);
});

test("strips punctuation", () => {
  const result = countWords("hello, world.");
  const wordMap = Object.fromEntries(result);
  expect(wordMap["hello"]).toBe(1);
  expect(wordMap["world"]).toBe(1);
});