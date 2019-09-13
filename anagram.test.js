const isAnagram = require("./anagram");

test("isAnagram fn exist", () => {
  expect(isAnagram).toBeDefined();
});

test("'cinema' is anagram of 'iceman'", () => {
  expect(isAnagram("cinema", "iceman")).toBeTruthy();
});
test("'halo' is anagram of 'aloha'", () => {
  expect(isAnagram("halo", "aloha")).toBeFalsy();
});
