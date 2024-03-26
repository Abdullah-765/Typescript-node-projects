import inquirer from "inquirer";
let balance = 10000;
let pin = 1234;
let takePin = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin",
    },
]);
if (takePin.pin === pin) {
    let pinOptions = await inquirer.prompt({
        name: "options",
        type: "list",
        message: "Select an option",
        choices: ["Withdraw", "Deposit", "Balance"],
    });
    if (pinOptions.options === "Withdraw") {
        let withdrawlAmount = await inquirer.prompt({
            name: "amountToWithdraw",
            type: "number",
            message: "Enter the withdrawl amount",
        });
        // if (withdrawlAmount.amountToWithdraw <= balance) {
        //   console.log(
        //     `Remaining balance ${balance - withdrawlAmount.amountToWithdraw}$`
        //   );
        // } else {
        //   console.log(`Not enough balance! \n Current balance ${balance}$`);
        // }
        console.log(withdrawlAmount.amountToWithdraw <= balance ? `Remaining balance ${balance - withdrawlAmount.amountToWithdraw}` : `Not enough balance! \n Current balance ${balance}$`);
    }
    else if (pinOptions.options === "Deposit") {
        let depositAmount = await inquirer.prompt({
            name: "amountToDeposit",
            type: "number",
            message: "Enter the deposit amount",
        });
        console.log(`Current Balance ${depositAmount.amountToDeposit + balance}$`);
    }
    else {
        console.log(`Current balance is ${balance}$`);
    }
}
else {
    console.log("Incorrect pin");
}
