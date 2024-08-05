import mysql from "mysql2/promise.js";

export const db = await mysql.createConnection({
  user: "candidate",
  password: "NoTeDeSt^C10.6?SxwY882}",
  host: "nodejs-technical-test.cm30rlobuoic.ap-southeast-1.rds.amazonaws.com",
  port: 3306,
  database: "conqtvms_dev",
  // user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // host: process.env.DB_HOST,
  // port: process.env.DB_PORT,
  // database: process.env.DB_NAME,
});
