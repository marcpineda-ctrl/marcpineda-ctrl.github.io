const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf8");

beforeEach(() => {
  document.documentElement.innerHTML = html;
  jest.resetModules();
  require("./script.js");
});

test("page has New Quote button", () => {
  const btn = document.getElementById("newQuote");
  expect(btn).not.toBeNull();
  expect(btn.textContent).toBe("New Quote");
});

test("quote display element exists", () => {
  const quote = document.getElementById("quote");
  expect(quote).not.toBeNull();
});

test("author display element exists", () => {
  const author = document.getElementById("author");
  expect(author).not.toBeNull();
});

test("clicking New Quote populates quote text", () => {
  const btn = document.getElementById("newQuote");
  const quote = document.getElementById("quote");
  btn.click();
  expect(quote.textContent).not.toBe("");
});