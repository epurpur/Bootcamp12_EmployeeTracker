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
                roles();
                break;

            case 'View Employees':
                employees();
                break;

            case 'Exit':
                console.log('Exiting...');
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
                'View total budget of a department***'
            ]
        })
        .then((answer) => {
            console.log(answer.deptResponse);
            //DEPENDING ON RESULT, DO DB QUERIES HERE
        })
}

const roles = () => {
//asks questions related to roles
    inquirer
        .prompt({
            name: 'rolesResponse',
            type: 'list',
            message: 'What would you like to do with the roles?',
            choices: [
                'View all roles',
                'Add a role',
                'Update employee roles'
            ]
        })
        .then((answer) => {
            console.log(answer.rolesResponse)
            //DEPENDING ON RESULT, DO DB QUERIES HERE
        })
}

const employees = () => {
    inquirer
        .prompt({
            name: 'employeesResponse',
            type: 'list',
            message: 'What would you like to do with the employees?',
            choices: [
                'View all employees',
                'Add an employee',
                'Update employee role',
                'Delete employee',
                'View employees by manager***'
            ]
        })
        .then((answer) => {
            console.log(answer.employeesResponse);
            //DEPENDING ON RESULT, DO DB QUERIES HERE
        })
}


initialQuestions();


