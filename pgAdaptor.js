import pgPromise from "pg-promise";
import { config } from "dotenv";
import fs from "fs";

config();

const pgp = pgPromise({});

const pgConfig = {
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  ssl: {
    require: true,
    rejectUnauthorized: true,
    ca: fs.readFileSync(`certs/${process.env.AWS_RDS_SSL_CA}.pem`).toString(),
  },
};
const db = pgp(pgConfig);

export default db;
