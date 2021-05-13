/* Seeds for SQL table */
USE employee_tracker;

INSERT INTO departments (name)
VALUES  ('Marketing'),
		('Sales'),
		('Development');

INSERT INTO roles (title, salary, department_id)
VALUES  ('Developer', 75000, 1),
		('Salesperson', 50000, 2),
		('Engineer', 70000, 3),
		('Manager', 100000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ('Erich', 'Purpur', 1, 4),
		('Sarah', 'Bridge', 2, 4),
		('Jay', 'Tilley', 1, 4),
		('Maddie', 'Tilley', 4, NULL),
		('Josh', 'Shepherd', 1, 4),
		('Kai', 'Shepherd', 2, 4),
		('Dylan', 'Fuller', 1, 11),
		('Veronica', 'Park', 3, 11),
		('Chase', 'Weaver', 1, 11),
		('Matt', 'deCamara', 3, 11),
		('Maggie', 'Vernon', 4, NULL),
		('Brian', 'Clevenger', 1, 11),
		('Eileen', 'Purpur', 3, 11),
		('Tom', 'Purpur', 1, 11),
		('Geraldine', 'Purpur', 2, 11),
		('Chris', 'Sharma', 3, 11),
		('Adam', 'Ondra', 2, 20),
		('Emily', 'Harrington', 1, 20),
		('Hazel', 'Findlay', 3, 20),
		('Alex', 'Honnold', 4, NULL),
		('Nina', 'Caprez', 2, 20),
		('Alex', 'Megos', 3, 20),
		('Margo', 'Hayes', 1, 20),
		('Jonathan', 'Siegrist', 2, 20),
		('Tommy', 'Caldwell', 2, 20);








