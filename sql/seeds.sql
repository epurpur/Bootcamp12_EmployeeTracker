use employee_tracker;

INSERT INTO departments (name)
VALUES	('Marketing'),
		('Sales'),
		('Development');

INSERT INTO roles (title, salary, department_id)
VALUES  ('Developer', 75000, 1),
		('Salesperson', 50000, 2),
		('Engineer', 70000, 3),
		('Manager', 100000, 2);
    
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES	('Erich', 'Purpur', 4, NULL),
		('Jay', 'Tilley', 4, NULL),
		('Maggie', 'Vernon', 4, NULL),
		('Sarah', 'Bridge', 1, 1),
		('Josh', 'Shepherd', 2, 1),
		('Dylan', 'Fuller', 3, 2),
		('Veronica', 'Park', 1, 2),
		('Matt', 'deCamara', 2, 3),
		('Leif', 'Carter', 3, 3);