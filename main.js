#! /usr/bin/env node
console.log("guess a number between 1 to 10");
//   now varible creat
let a = Math.floor(Math.random() * 10);
import inquirer from "inquirer";
while (true) {
    let input = await inquirer.prompt({
        name: "guess", type: "number",
        message: "enter your guess number you want:  "
    });
    //  provide code
    let ans = input.guess;
    if (a == ans) {
        console.log("Congratulation your guess number absolutely correct");
        break;
    }
    else {
        console.log("Sorry you guess wrong number try again ");
    }
}
