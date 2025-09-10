-- Create Zentek user with admin rights
CREATE USER zentek WITH PASSWORD 'ZentekPass123!';
GRANT ALL PRIVILEGES ON DATABASE mydb TO zentek;

-- Switch to mydb
\c mydb;

-- Create table and insert dummy data
CREATE TABLE zentek_table (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    role VARCHAR(50)
);

INSERT INTO zentek_table (name, role) VALUES
('Dummy1', 'Admin'),
('Dummy2', 'Editor');

-- Create Hitesh user with read-only rights
CREATE USER hitesh WITH PASSWORD 'HiteshReadPass';
GRANT CONNECT ON DATABASE mydb TO hitesh;
GRANT USAGE ON SCHEMA public TO hitesh;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO hitesh;
