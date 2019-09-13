const reverseString = require("./reverseString");

test("reverseString fn exist", () => {
  expect(reverseString).toBeDefined();
});

test("if the string reverse with uppercase", () => {
  expect(reverseString("Hello")).toEqual("olleh");
});
