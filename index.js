#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter a first number", type: "number", name: "firstNumber" },
    { message: "Enter a second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponention", "Modulus"],
    },
]);
// console.log(answer);
// conditional statements:
if (answer.operator == "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator == "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator == "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator == "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator == "Exponention") {
    console.log(answer.firstNumber ** answer.secondNumber);
}
else if (answer.operator == "Modulus") {
    console.log(answer.firstNumber % answer.secondNumber);
}
else {
    console.log("Please enter a valid operator");
}
