const { prompt } = require("inquirer");

employeeArr = [];

loop = true;
const start = async () => {
  while (loop) {
    input = await prompt([
      {
        type: "confirm",
        name: "continue",
        message: "Would you like to start the program?",
      },
    ]);
    if (!input.continue) {
      loop = false;
    }
  }
};

start();
