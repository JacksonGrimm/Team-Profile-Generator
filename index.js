const { prompt } = require("inquirer");
const fs = require("fs");
const Manager = require("./classes/Manager");
const Engineer = require("./classes/Engineer");
const Intern = require("./classes/Intern");
const topHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- CSS only -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
      crossorigin="anonymous"
    ></script>
    <title>Document</title>
  </head>
  <body>`;
//gonna store employee objects and push user inputs into
employeeArr = [];
loop = true;

const buildEmployees = (employeeArr) => {
  console.log(employeeArr);
  //build top half of html file
  fs.writeFile("./return/index1.html", topHtml, function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
  // employeeArr.forEach((element) => {
  //   //append lower half with loop info
  //   //check each items role
  //   //create new cards depending on role
  //   //add bottom half
  // });
};

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
      break;
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
  }
  return buildEmployees(employeeArr);
};

start();
