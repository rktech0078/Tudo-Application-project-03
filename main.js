#! usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "tudo",
            type: "input",
            message: "What you want to add in this list:  ",
        },
        {
            name: "addMore",
            type: "confirm",
            default: "false",
            message: "If you add something in this list: ",
        },
    ]);
    todos.push(addTask.tudo);
    condition = addTask.addMore;
    console.log(todos);
}
// import inquirer from "inquirer";
// let tudos = [];
// let condition = true;
// while (condition) {
//   let task = await inquirer.prompt([
//     {
//       name: "tudo",
//       type: "input",
//       message: "Enter your list ",
//     },
//     {
//       name: "more",
//       type: "confirm",
//       default: "false",
//       message: "want add more",
//     },
//   ]);
//   tudos.push(task.tudo);
//   condition = task.more;
//   console.log(tudos);
// }
