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

//make connection to database to begin application
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
                    //ask for new department name
                    inquirer
                        .prompt({
                            name: 'newDeptName',
                            type: 'input',
                            message: 'Add new department name: '
                        })
                        .then((response) => {

                            //make connection to DB to make new department
                            connection.query(`INSERT INTO departments (name) VALUES ('${response.newDeptName}')`);
                            console.log(`Adding new department: ${response.newDeptName}`);

                            initialQuestions();
                        })

                    break;

                case 'View total budget of a department':
                    inquirer
                        .prompt({
                            name: 'deptBudget',
                            type: 'input',
                            message: "Which department's budget do you want to see?"
                        })
                        .then((response) => {
                            //translate response to department IDs
                            let dept_id;
                            switch(response.deptBudget) {
                                case 'Marketing': dept_id = 1; break;
                                case 'Sales': dept_id = 2; break;
                                case 'Development': dept_id = 3; break;
                                case 'Engineering': dept_id = 4; break;
                            }

                            connection.query(
                                `SELECT SUM(R.salary) as total
                                FROM roles as R, employees as E
                                WHERE R.id = ${dept_id} AND E.role_id = ${dept_id}`,
                                (err, res) => {
                                    //format response as dollar amount
                                    const formatter = new Intl.NumberFormat('en-US', {
                                        style: 'currency',
                                        currency: 'USD',
                                      });

                                    console.log(`\n Total budget for ${response.deptBudget} is ${formatter.format(res[0].total)} \n`)
                                    
                                    initialQuestions();
                                });
                        })
 
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
                    //ask for new role name
                    inquirer
                        .prompt([
                            {
                                name: 'newRoleName',
                                type: 'input',
                                message: 'Add new role name: ',
                            },
                            {
                                name: 'newRoleSalary',
                                type: 'input',
                                message: 'Enter salary for new role: ',
                            }
                            ])
                        .then((response) => {
                            //creates random department_id between 1-4
                            const dept_id = Math.floor(Math.random() * 4) + 1    

                            //make connection to DB and make new role
                            connection.query(`INSERT INTO roles (title, salary, department_id) VALUES ('${response.newRoleName}', ${response.newRoleSalary}, ${dept_id})`);
                        
                            console.log(`\n Inserting new role of: ${response.newRoleName} \n`);

                            initialQuestions();
                        })
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
            ]
        })
        .then((answer) => {
            switch(answer.employeesResponse) {
                //views all employees in table
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
                    //start by making DB query to get employee roles
                    connection.query(
                        'SELECT * FROM roles', 
                        (err, res) => {
                            //create array of roles to choose from. Later to be used in inquirer 
                            let roles = [];
                            res.forEach((role) => {roles.push(role.title)});
                            
                            //adds employee to table
                            inquirer
                                .prompt([
                                    {
                                        name: 'name',
                                        type: 'input',
                                        message: 'Enter employee name (ex: Joe Smith): '
                                    },
                                    {
                                        name: 'role',
                                        type: 'list',
                                        message: 'Choose employee role: ',
                                        choices: ['Developer', 'Salesperson', 'Engineer', 'Manager'],
                                    },
                                ])
                                .then((response) => {
                                    //creates random employee id between 1-1000
                                    const id = Math.floor(Math.random() * 1000) + 1
                                    //creates random manager_id between 1-4
                                    const manager_id = Math.floor(Math.random() * 4) + 1    

                                    //break apart name into first and last name
                                    let name = response.name.split(" ");
                                    const firstName = name[0];
                                    const lastName = name[1];
                                    
                                    //set role_id depending on role
                                    let role_id;
                                    switch(response.role) {
                                        case 'Developer': role_id = 1; break;
                                        case 'Salesperson': role_id = 2; break;
                                        case 'Engineer': role_id = 3; break;
                                        case 'Manager': role_id = 4; break;
                                    }

                                    console.log(`\n Adding employee record: ${firstName}, ${lastName}, ${role_id}, ${manager_id} \n`);
                                    
                                    //insert values into database via SQL statement
                                    connection.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('${firstName}', '${lastName}', ${role_id}, ${manager_id})`);
                                    initialQuestions();
                                })});
                    break;

                case 'Update employee role':
                    // Ask user for employee name
                    inquirer
                        .prompt({
                            name: 'employeeName',
                            type: 'input',
                            message: 'Enter name of employee to update: '
                        })
                        .then((answer) => {
                            //split answer into first and last name for SQL query
                            let name = answer.employeeName.split(" ");
                            const firstName = name[0];
                            const lastName = name[1];
                            //make DB connection to get record for chosen employee
                            connection.query(
                                `SELECT * FROM employees WHERE first_name='${firstName}' AND last_name='${lastName}'`,
                                (err, res) => {
                                    if (res) {
                                        //translate role_id to text
                                        let job;
                                        switch(res[0].role_id) {
                                            case 1: job='Developer'; break;
                                            case 2: job='Salesperson'; break;
                                            case 3: job='Engineer'; break;
                                            case 4: job='Manager'; break;
                                        }
                                        
                                        console.log(`\n Current role of ${answer.employeeName} is: ${job} \n`);

                                        //make DB connection to get choices of roles
                                        connection.query('SELECT * FROM roles', (err, res) => {
                                            let roles = []
                                            res.forEach((role) => {roles.push(role.title)});

                                            //prompt user for new role choice:
                                            inquirer
                                                .prompt({
                                                    name: 'newRole',
                                                    type: 'list',
                                                    message: 'Choose new role for employee: ',
                                                    choices: roles,
                                                })
                                                .then((response) => {
                                                    console.log('New role is: ', response.newRole);

                                                    //translate role choice back into number for role_id
                                                    let role_id;
                                                    switch(response.newRole) {
                                                        case 'Developer': role_id = 1; break;
                                                        case 'Salesperson': role_id = 2; break;
                                                        case 'Engineer': role_id = 3; break;
                                                        case 'Manager': role_id = 4; break;
                                                    }

                                                    //make update to DB record (finally!)
                                                    console.log('Updating role... \n');
                                                    connection.query(`UPDATE employees SET role_id=${role_id} WHERE first_name='${firstName}' AND last_name='${lastName}' `);
                                                    
                                                    initialQuestions();
                                                })})
                                    } 
                                }
                            )
                        })
                    break;

                case 'Delete employee':
                    connection.query(
                        'SELECT * FROM employees',
                        (err, res) => {
                            //create array of employee names to choose from. Later to be used in inquirer
                            let employees = [];
                            res.forEach((emp) => {
                                let fullName = emp.first_name + ' ' + emp.last_name;
                                employees.push(fullName);
                            });
                            inquirer
                            //prompt user to choose employee to delete
                                .prompt({
                                    name: 'empDelete',
                                    type: 'list',
                                    message: 'Which employee do you want to delete?',
                                    choices: employees,
                                })
                                .then((answer) => {
                                    // split user choice into first and last name
                                    fullName = answer.empDelete.split(" ")
                                    const first = fullName[0];
                                    const last = fullName[1];

                                    console.log(`\n Deleting employee: ${answer.empDelete} \n`);
                                    //make database connection to delete record of chosen employee
                                    connection.query(
                                        `DELETE FROM employees WHERE first_name='${first}' AND last_name='${last}'`
                                    )
                                    initialQuestions();
                                })
                        }
                    )
                    break;
            }
        })
}




