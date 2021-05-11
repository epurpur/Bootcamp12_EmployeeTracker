/**
 * CONNECTION TO DATABASE GOES HERE + INQUIRER LOGIC
 */

const mysql = require('mysql');
const inquirer = require('inquirer');

const initialQuestions = () => {
// Asks initial question about what user 
    inquirer
        .prompt({
            name: 'userResponse',
            type: 'list',
            message: 'What would you like to do?',
        choices: [
            'View Departments',
            'View Roles',
            'View Employees',
            'Exit'
        ],      
    })
    .then((answer) => {
        switch (answer.userResponse) {
            case 'View Departments':
                departments();
                break;
            
            case 'View Roles':
                console.log('Bango!');
                break;

            case 'View Employees':
                console.log('BaZing!');
                break;

            case 'Exit':
                console.log('Done for now');
                break;
        }
    });
 }


const departments = () => {
//asks questions related to departments
    inquirer
        .prompt({
            name: 'deptResponse',
            type: 'list',
            message: 'What would you like to do with the departments?',
            choices: [
                'View all departments',
                'Add a department',
                'View total budget of a department'
            ]
        })
        .then((answer) => {
            console.log(answer.deptResponse);
        })

}




initialQuestions();


