const Employee = require("../classes/Employee");

describe("Employee", () => {
  it("should return the all of the employees values", () => {
    const test = new Employee("Tim", "720", "TimEmail@gmail");
    expect(test.getName()).toBe("Tim");
    expect(test.getId()).toBe("720");
    expect(test.getEmail()).toBe("TimEmail@gmail");
    expect(test.getRole()).toBe("Employee");
  });
});
