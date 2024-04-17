#! /usr/bin/env node
import inquirer from "inquirer";
let userInput = await inquirer.prompt([
    {
        name: "currencySelect",
        type: "list",
        message: "select the desired currency",
        choices: ["Ruble", "Pound", "Riyal", "Tkl", "Inr", "Pkr"],
    },
    {
        name: "currencyInput",
        type: "input",
        message: "Enter the amount in USD",
    },
]);
let conversionRate = {
    Ruble: 92.90,
    Pound: 0.79,
    Riyal: 3.75,
    Tkl: 32.25,
    Inr: 83.24,
    Pkr: 277.95,
};
if (userInput.currencySelect === "Ruble") {
    console.log(`${userInput.currencyInput}$ is equal to ${userInput.currencyInput * conversionRate.Ruble} Ruble \nconversion rate is ${conversionRate.Ruble}`);
}
else if (userInput.currencySelect === "Pound") {
    console.log(`${userInput.currencyInput}$ is equal to ${userInput.currencyInput * conversionRate.Pound} Pound \nconversion rate is ${conversionRate.Pound}`);
}
else if (userInput.currencySelect === "Riyal") {
    console.log(`${userInput.currencyInput}$ is equal to ${userInput.currencyInput * conversionRate.Riyal} Riyal \nconversion rate is ${conversionRate.Riyal}`);
}
else if (userInput.currencySelect === "Tkl") {
    console.log(`${userInput.currencyInput}$ is equal to ${userInput.currencyInput * conversionRate.Tkl} Tkl \nconversion rate is ${conversionRate.Tkl}`);
}
else if (userInput.currencySelect === "Inr") {
    console.log(`${userInput.currencyInput}$ is equal to ${userInput.currencyInput * conversionRate.Inr} Inr \nconversion rate is ${conversionRate.Inr}`);
}
else {
    console.log(`${userInput.currencyInput}$ is equal to ${userInput.currencyInput * conversionRate.Pkr} Pkr \nconversion rate is ${conversionRate.Pkr}`);
}
