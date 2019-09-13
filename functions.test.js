const functions = require("./functions");
/* beforeEach(() => initDatabase());
afterEach(() => closeDatabase()); */

/* beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log("database initialized..");
const closeDatabase = () => console.log("..database closed"); */

const nameCheck = () => {
  console.log("checking names..");
};

//nameCheck fn runs only twice only before this test in "describe" block
describe("checking names", () => {
  beforeEach(() => nameCheck());

  test("user is selda", () => {
    const user = "selda";
    expect(user).toBe("selda");
  });
  test("user is Jo", () => {
    const user = "Jo";
    expect(user).toBe("Jo");
  });
});

//to be
test("adds 2 to 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

//not to be
test("adds 2 to 2 not equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

//to be null
test("should be null", () => {
  expect(functions.isNull()).toBeNull;
});

//to be falsy
test("should be falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy;
});

//toEqual
test("user should be Selda Güzel object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Selda",
    lastName: "Güzel"
  });
});

//less than and greater than

test("should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

//Regex
test("there is no i in team", () => {
  expect("team").not.toMatch(/I/i);
});

//Arrays
test("admin should be in username", () => {
  usernames = ["selda", "mila", "amy", "admin"];
  expect(usernames).toContain("admin");
});

//working with async data

test("username should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
