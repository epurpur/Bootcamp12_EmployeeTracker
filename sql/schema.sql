/* Schema for SQL database/table */
DROP DATABASE IF EXISTS employee_tracker;

/*Create Database */
CREATE DATABASE employee_tracker;

USE employee_tracker;

/* Create new table */
CREATE TABLE employees (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,      
    manager_id INT,          
);

CREATE TABLE departments (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(30)
);

CREATE TABLE roles (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT NOT NULL,
);

ALTER TABLE employees ADD FOREIGN KEY (role_id) REFERENCES roles(id);
