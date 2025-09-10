-- Create Zentek user with admin rights
CREATE USER 'zentek'@'%' IDENTIFIED BY 'ZentekPass123!';
GRANT ALL PRIVILEGES ON mydb.* TO 'zentek'@'%';

-- Use database
USE mydb;

-- Create table and insert dummy data
CREATE TABLE zentek_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    role VARCHAR(50)
);

INSERT INTO zentek_table (name, role) VALUES
('Dummy1', 'Admin'),
('Dummy2', 'Editor');

-- Create Hitesh user with read-only rights
CREATE USER 'hitesh'@'%' IDENTIFIED BY 'HiteshReadPass';
GRANT SELECT ON mydb.* TO 'hitesh'@'%';
