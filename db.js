import mysql from 'mysql2'

import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from './config.js';

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT
});

export default connection;
