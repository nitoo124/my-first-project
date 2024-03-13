import inquirer from "inquirer";
let input = await inquirer.prompt([{
        name: 'num1',
        type: 'number',
        message: "plz entre your first number :"
    },
    {
        name: 'num2',
        type: 'number',
        message: "plz entre your 2nd number :"
    },
    {
        name: 'operator',
        type: 'list',
        message: "plz select operation :",
        choices: ["+", "-", "*", "/", "%", "**"]
    }
]);
console.log(input);
let { num1, num2, operator } = input;
if (num1 && num2 && operator) {
    if (operator === "+") {
        console.log(num1 + num2);
    }
    if (operator === "-") {
        console.log(num1 - num2);
    }
    if (operator === "*") {
        console.log(num1 * num2);
    }
    if (operator === "/") {
        console.log(num1 / num2);
    }
    if (operator === "%") {
        console.log(num1 % num2);
    }
    if (operator === "**") {
        console.log(num1 ** num2);
    }
}
else {
    console.log("plz entre valid operator");
}
