import pgPromise from "pg-promise";
import { config } from "dotenv";

config();

const pgp = pgPromise({});

const pgConfig = {
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
};
const db = pgp(pgConfig);

export default db;
