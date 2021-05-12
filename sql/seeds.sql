/* Seeds for SQL table */
USE employee_tracker;

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ('Erich', 'Purpur', 1, 1),
		('Sarah', 'Bridge', 2, 1),
		('Jay', 'Tilley', 1, 1),
		('Maddie', 'Tilley', 2, 1),
		('Josh', 'Shepherd', 1, 1),
		('Kai', 'Shepherd', 2, 2),
		('Dylan', 'Fuller', 1, 2),
		('Veronica', 'Park', 3, 2),
		('Chase', 'Weaver', 1, 2),
		('Matt', 'deCamara', 3, 3),
		('Maggie', 'Vernon', 3, 3),
		('Brian', 'Clevenger', 1, 3),
		('Eileen', 'Purpur', 4, 4),
		('Tom', 'Purpur', 1, 1),
		('Geraldine', 'Purpur', 4, 4),
		('Chris', 'Sharma', 3, 2),
		('Adam', 'Ondra', 2, 3),
		('Emily', 'Harrington', 1, 1),
		('Hazel', 'Findlay', 4, 4),
		('Alex', 'Honnold', 1, 2),
		('Nina', 'Caprez', 2, 3),
		('Alex', 'Megos', 3, 1),
		('Margo', 'Hayes', 1, 2),
		('Jonathan', 'Siegrist', 2, 3),
		('Tommy', 'Caldwell', 2, 2);

INSERT INTO departments (name)
VALUES  ('Marketing'),
		('Sales'),
		('Development');



INSERT INTO roles (id, title, salary, dept_id)
VALUES  ('Developer', 75000, 3),
		('Salesperson', 50000, 2),
		('Engineer', 70000, 3),
		('Manager', 100000, 1);
