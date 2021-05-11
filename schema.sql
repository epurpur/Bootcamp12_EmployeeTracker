/* Schema for SQL database/table */
DROP DATABASE IF EXISTS employee_tracker;

/*Create Database */
CREATE DATABASE employee_tracker;

USE employee_tracker;

/* Create new table */
CREATE TABLE employees (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT 
);

CREATE TABLE departments (
    id INT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE roles (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(6,2),
    department_id INT
);
