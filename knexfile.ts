import { Knex } from "knex";
import "dotenv/config";
// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      host: process.env.POSTGRESQL_HOST,
      database: process.env.POSTGRESQL_DATABASE,
      user: process.env.POSTGRESQL_USER,
      password: process.env.POSTGRESQL_PASSWORD,
      port: Number(process.env.POSTGRESQL_PORT),
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      host: process.env.POSTGRESQL_HOST,
      database: process.env.POSTGRESQL_DATABASE,
      user: process.env.POSTGRESQL_USER,
      password: process.env.POSTGRESQL_PASSWORD,
      port: Number(process.env.POSTGRESQL_PORT),
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      host: process.env.POSTGRESQL_HOST,
      database: process.env.POSTGRESQL_DATABASE,
      user: process.env.POSTGRESQL_USER,
      password: process.env.POSTGRESQL_PASSWORD,
      port: Number(process.env.POSTGRESQL_PORT),
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

module.exports = config;
