const Intern = require("../classes/Intern");

describe("Intern", () => {
  it("should return the all of the employees values", () => {
    const test = new Intern("Tim", "720", "TimEmail@gmail", "School");
    expect(test.getName()).toBe("Tim");
    expect(test.getId()).toBe("720");
    expect(test.getEmail()).toBe("TimEmail@gmail");
  });
  it("Role should return Intern", () => {
    const test = new Intern("Tim", "720", "TimEmail@gmail", "School");
    expect(test.getRole()).toBe("Intern");
  });
  it("should return the School", () => {
    const test = new Intern("Tim", "720", "TimEmail@gmail", "School");
    expect(test.getSchool()).toBe("School");
  });
});
