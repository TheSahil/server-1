import mysql from 'mysql2'
import dotenv from 'dotenv'
import constants from '../constants.js'

dotenv.config();

export function executeQuery(query) {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection({
      host: process.env.DB_host,
      user: process.env.DB_user,
      password: process.env.DB_password,
      database: process.env.DB_database
    });

    connection.connect((err) => {
      if (err) {
        console.error('Error connecting to the MariaDB server:', err.stack);
        reject(err);
      } else {
        console.log('Connected to the MariaDB server as id ' + connection.threadId);

        connection.query(query, (error, results, fields) => {
          if (error) {
            reject(error);
          } else {
            // console.log(results);

            connection.end((err) => {
              if (err) {
                console.error('Error closing the connection:', err.stack);
                reject(err);
              } else {
                console.log('Connection closed.');
                resolve(results);
              }
            });
          }
        });
      }
    });
  });
}

// executeQuery(constants.SQL.GET_ALL);