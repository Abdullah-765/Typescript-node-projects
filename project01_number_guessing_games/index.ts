#! /usr/bin/env node 

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random()*6 + 1)

const answer = await inquirer.prompt([
  {
    name: "guess",
    type: "number",
    message: "Enter your guess between 1-6",
  },
]);

if (answer.guess === randomNumber) {
  console.log("You guessed right!");
} else {
  console.log("Wrong guess");
}
