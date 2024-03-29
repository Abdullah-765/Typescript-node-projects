#! /usr/bin/env node

import inquirer from "inquirer";

let List: string[] = [];

let condition = true;
while (condition) {
  let moreList = await inquirer.prompt([
    {
      name: "todos",
      type: "input",
      message: "Add your todos",
    },

    //Using list instead of confirm type
    {
      name: "addMore",
      type: "list",
      message: "Do you want to add more todos",
      choices: ["yes", "no"],
    },
  ]);

  moreList.addMore === "yes" ? (condition = true) : (condition = false);
  List.push(moreList.todos);
}

// adding a bullet using forEach loop
let i = 1;
List.forEach((element, index) => {
  console.log(`${index + 1}. ${element}`);
});
