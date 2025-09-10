// backend/postgres.js
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.PGHOST || 'postgres',
  user: process.env.PGUSER || 'pguser',
  password: process.env.PGPASSWORD || 'pgpassword',
  database: process.env.PGDATABASE || 'mydb',
});

module.exports = pool;
