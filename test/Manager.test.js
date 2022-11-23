const Manager = require("../classes/Manager");

describe("Manager", () => {
  it("should return the all of the employees values", () => {
    const test = new Manager("Tim", "720", "TimEmail@gmail", "221");
    expect(test.getName()).toBe("Tim");
    expect(test.getId()).toBe("720");
    expect(test.getEmail()).toBe("TimEmail@gmail");
  });
  it("Role should return manager", () => {
    const test = new Manager("Tim", "720", "TimEmail@gmail", "221");
    expect(test.getRole()).toBe("Manager");
  });
  it("Role should return the office number", () => {
    const test = new Manager("Tim", "720", "TimEmail@gmail", "221");
    expect(test.officeNumber).toBe("221");
  });
});
