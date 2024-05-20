import { createPool } from 'mysql2'
import dotenv from 'dotenv'

dotenv.config();

const dbConfig = {
  host: process.env.DB_host,
  user: process.env.DB_user,
  password: process.env.DB_password,
  database: process.env.DB_database
};

const pool = createPool(dbConfig);
export default pool.promise();