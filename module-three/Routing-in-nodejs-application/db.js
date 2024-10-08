const { Pool } = require("pg");

// Create a new pool instance
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "student",
    password: "root",
    port: 5432 // Default postgreSQL port
});

// Export the pool instance to be used in other modules
module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    }
};