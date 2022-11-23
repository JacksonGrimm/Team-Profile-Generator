const { prompt } = require("inquirer");
const Manager = require("./classes/Manager");
const Engineer = require("./classes/Engineer");
const Intern = require("./classes/Intern");

//gonna store employee objects and push user inputs into
employeeArr = [];

loop = true;
const start = async () => {
  while (loop) {
    startPrompt = await prompt([
      {
        type: "confirm",
        name: "continue",
        message: "Would you like to start the program?",
      },
    ]);
    if (!startPrompt.continue) {
      loop = false;
      return;
    }
    userInput = await prompt([
      {
        name: "employeeName",
        type: "input",
        message: "Whats the employees name?",
      },
      {
        name: "employeeId",
        type: "input",
        message: "Whats the employees ID?",
      },
      {
        name: "employeeEmail",
        type: "input",
        message: "Whats the employees Email?",
      },
      {
        name: "employeeJob",
        type: "list",
        message: "Whats their Job?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ]);
    console.log(userInput);
    switch (userInput.employeeJob) {
      case "Manager":
        jobDetails = await prompt([
          {
            name: "info",
            type: "input",
            message: "Whats the managers office number?",
          },
        ]);
        employeeArr.push(
          new Manager(
            userInput.employeeName,
            userInput.employeeId,
            userInput.employeeEmail,
            jobDetails.info
          )
        );
        break;
      case "Engineer":
        jobDetails = await prompt([
          {
            name: "info",
            type: "input",
            message: "Whats the Engineers Github?",
          },
        ]);
        employeeArr.push(
          new Engineer(
            userInput.employeeName,
            userInput.employeeId,
            userInput.employeeEmail,
            jobDetails.info
          )
        );
        break;
      case "Intern":
        jobDetails = await prompt([
          {
            name: "info",
            type: "input",
            message: "Whats the Interns school?",
          },
        ]);
        employeeArr.push(
          new Intern(
            userInput.employeeName,
            userInput.employeeId,
            userInput.employeeEmail,
            jobDetails.info
          )
        );
        break;
    }
    console.log(employeeArr);
  }
};

start();
