import { Sequelize } from "sequelize-typescript";
// import { config } from "./config/config";

// export const sequelize = new Sequelize({
//   username: config.username,
//   password: config.password,
//   database: config.database,
//   host: config.host,
//   port: config.port,

//   dialect: "postgres",
//   storage: ":memory:",
// });

// Just like classroom's code.
export const sequelize = new Sequelize(
  "postgres://udgram:password123@amjaddb.cwsazyior4i9.us-east-1.rds.amazonaws.com:5432/udagram"
);