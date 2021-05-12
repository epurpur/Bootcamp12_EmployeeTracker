/* Seeds for SQL table */
USE employee_tracker;

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES  (1, 'Erich', 'Purpur', 1, 1),
		(2, 'Sarah', 'Bridge', 2, 1),
		(3, 'Jay', 'Tilley', 1, 1),
		(4, 'Maddie', 'Tilley', 2, 1),
		(5, 'Josh', 'Shepherd', 1, 1),
		(6, 'Kai', 'Shepherd', 2, 2),
		(7, 'Dylan', 'Fuller', 1, 2),
		(8, 'Veronica', 'Park', 3, 2),
		(9, 'Chase', 'Weaver', 1, 2),
		(10, 'Matt', 'deCamara', 3, 3),
		(11, 'Maggie', 'Vernon', 3, 3),
		(12, 'Brian', 'Clevenger', 1, 3),
		(13, 'Eileen', 'Purpur', 4, 4),
		(14, 'Tom', 'Purpur', 1, 1),
		(15, 'Geraldine', 'Purpur', 4, 4),
		(16, 'Chris', 'Sharma', 3, 2),
		(17, 'Adam', 'Ondra', 2, 3),
		(18, 'Emily', 'Harrington', 1, 1),
		(19, 'Hazel', 'Findlay', 4, 4),
		(20, 'Alex', 'Honnold', 1, 2),
		(21, 'Nina', 'Caprez', 2, 3),
		(22, 'Alex', 'Megos', 3, 1),
		(23, 'Margo', 'Hayes', 1, 2),
		(24, 'Jonathan', 'Siegrist', 2, 3),
		(25, 'Tommy', 'Caldwell', 2, 2);

INSERT INTO departments (id, name)
VALUES  (1, 'Marketing'),
		(2, 'Sales'),
		(3, 'Development');



INSERT INTO roles (id, title, salary, dept_id)
VALUES  (1, 'Developer', 75000, 3),
		(2, 'Salesperson', 50000, 2),
		(3, 'Engineer', 70000, 3),
		(4, 'Manager', 100000, 1);
