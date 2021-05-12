const mysql = require('mysql');
const inquirer = require('inquirer');


//DATABASE CONNECTION
const connection = mysql.createConnection({
    host: 'localhost',

    //port #
    post: 3306,

    //username
    user: 'root',

    //my credentials
    password: 'battlebot',
    database: 'employee_tracker'
});

connection.connect((err) => {
    if (err) throw err;
    initialQuestions();
})


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
                connection.end();
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
            switch(answer.deptResponse) {
                case 'View all departments':
                    //write SQL query
                    connection.query(
                        'SELECT * FROM departments',
                        (err, res) => {
                            //if response exists
                            if (res) {
                                console.log('\n List of Departments: \n');
                                res.forEach((response) => {console.log(response.name)});
                                console.log('');
                                initialQuestions();
                            } else {
                                console.log(`Error! ... ${err}`)
                            }
                        })
                    break;

                case 'Add a department':
                    break;

                case 'View total budget of a department***':
                    console.log('viewing total budget of department')
                    break;
            }
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
            switch(answer.rolesResponse) {
                case 'View all roles':
                    connection.query(
                        'SELECT * FROM roles',
                        (err, res) => {
                            //if response exists
                            if (res) {
                                console.log('\n List of Roles: \n');
                                res.forEach((response) => {console.log(response.title)});
                                console.log('')
                                initialQuestions();
                            } else {
                                console.log(`Error! ... ${err}`);
                            }
                        })
                    break;

                case 'Add a role': 
                    console.log('Adding a role');
                    break;

                case 'Update employee roles':
                    console.log('Updating employee role');
                    break;
            }
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
            switch(answer.employeesResponse) {
                case 'View all employees':
                    //write SQL query
                    connection.query(
                        'SELECT * FROM employees',
                        (err, res) => {
                            //if response exists
                            if (res) {
                                console.log('\n List of Employees: \n');
                                res.forEach((response) => {console.log(`${response.first_name} ${response.last_name}`)});
                                console.log('');
                                initialQuestions();
                            } else {
                                console.log(`Error! ... ${err}`);
                            }
                        }
                    )
                    break;

                case 'Add an employee':
                    break;

                case 'Update employee role':
                    break;

                case 'Delete employee':
                    break;

                case 'View employees by manager***':
                    break;

            }
        })
}




