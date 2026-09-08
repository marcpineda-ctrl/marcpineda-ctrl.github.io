const { renderPost } = require("./script.js");

beforeEach(() => {
  document.body.innerHTML = '<div id="earners"></div>';
});

test("renderPost creates an earner div", () => {
  const container = document.getElementById("earners");
  const post = {
    title: "John Smith",
    department: "Police Department",
    earnings: "150000"
  };
  renderPost(post, container);
  const earner = container.querySelector(".earner");
  expect(earner).not.toBeNull();
});

test("renderPost displays the correct name", () => {
  const container = document.getElementById("earners");
  const post = {
    title: "Jane Doe",
    department: "Fire Department",
    earnings: "120000"
  };
  renderPost(post, container);
  expect(container.querySelector("h2").textContent).toBe("Jane Doe");
});

test("renderPost displays the correct department", () => {
  const container = document.getElementById("earners");
  const post = {
    title: "Jane Doe",
    department: "Fire Department",
    earnings: "120000"
  };
  renderPost(post, container);
  expect(container.querySelector("h3").textContent).toBe("Fire Department");
});

test("renderPost displays the correct earnings", () => {
  const container = document.getElementById("earners");
  const post = {
    title: "Jane Doe",
    department: "Fire Department",
    earnings: "120000"
  };
  renderPost(post, container);
  expect(container.querySelector("h4").textContent).toBe("$120000");
});