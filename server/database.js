const Pool = require("pg").Pool;
require('dotenv').config();
// let url = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
const url = 'postgres://vohtkglc:KtucRmKCERaklBchF0rJE6SuzAAUx8T2@drona.db.elephantsql.com:5432/vohtkglc';


const pool = new Pool({
    connectionString: url
});
module.exports = pool;
