const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf8");

beforeEach(() => {
  document.documentElement.innerHTML = html;
  jest.resetModules();
  require("./script.js");
});

test("page has Plus button", () => {
  const btn = document.getElementById("increase");
  expect(btn).not.toBeNull();
  expect(btn.textContent).toBe("Plus");
});

test("page has Minus button", () => {
  const btn = document.getElementById("decrease");
  expect(btn).not.toBeNull();
  expect(btn.textContent).toBe("Minus");
});

test("count starts at 0", () => {
  const count = document.getElementById("count");
  expect(count.textContent).toBe("0");
});

test("clicking Plus increases count", () => {
  const increaseBtn = document.getElementById("increase");
  const count = document.getElementById("count");
  increaseBtn.click();
  expect(count.textContent).toBe("1");
});

test("clicking Minus decreases count", () => {
  const decreaseBtn = document.getElementById("decrease");
  const count = document.getElementById("count");
  decreaseBtn.click();
  expect(count.textContent).toBe("-1");
});