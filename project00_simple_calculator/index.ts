#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First number", type: "number", name: "FirstNumber" },
  { message: "Enter Second number", type: "number", name: "SecondNumber" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
if (answer.operator === "Addition") {
  console.log(`\nYour answer is ${answer.FirstNumber + answer.SecondNumber}`);
} else if (answer.operator === "Subtraction") {
  console.log(`\nYour answer is ${answer.FirstNumber - answer.SecondNumber}`);
} else if (answer.operator === `Multiplication`) {
  console.log(`\nYour answer is ${answer.FirstNumber * answer.SecondNumber}`);
} /*(answer.operator === `Division`)*/ else {
  console.log(`\nYour answer is ${answer.FirstNumber / answer.SecondNumber}`);
}
