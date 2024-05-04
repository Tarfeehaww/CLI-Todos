import inquirer from "inquirer"
let todos = []
let condition = true //we're using whileloop here
//for repeating process we use loops

while(condition) // change in second question
{
    let todoQuestion= await inquirer.prompt(
    [
    {    //these are objects
        name: "Q1",
        type:"input",
        message:"What do you want to add in your todos?"
    },
    {
        name:"Q2",
        type:"confirm",
        message:"What do you like to add more in your todos?",
        default:"true"
    }
    ]
);
todos.push(todoQuestion.Q1); //change with first question
console.log(todos);
condition = todoQuestion.Q2;
}