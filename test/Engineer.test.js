const Engineer = require("../classes/Engineer");

describe("Engineer", () => {
  it("should return the all of the employees values", () => {
    const test = new Engineer("Tim", "720", "TimEmail@gmail", "Github.com");
    expect(test.getName()).toBe("Tim");
    expect(test.getId()).toBe("720");
    expect(test.getEmail()).toBe("TimEmail@gmail");
  });
  it("Role should return Engineer", () => {
    const test = new Engineer("Tim", "720", "TimEmail@gmail", "Github.com");
    expect(test.getRole()).toBe("Engineer");
  });
  it("Role should return the Github", () => {
    const test = new Engineer("Tim", "720", "TimEmail@gmail", "Github.com");
    expect(test.getGithub()).toBe("Github.com");
  });
});
