import knex from 'knex';
import 'dotenv/config';

const knexInstance = knex({
  client: 'postgresql',
  connection: {
    host: process.env.POSTGRESQL_HOST,
    database: process.env.POSTGRESQL_DATABASE,
    user: process.env.POSTGRESQL_USER,
    password: process.env.POSTGRESQL_PASSWORD,
    port: Number(process.env.POSTGRESQL_PORT)
  },  
});

export default knexInstance;