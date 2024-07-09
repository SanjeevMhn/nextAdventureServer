// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

require('dotenv').config();
const { CLIENT, HOST, DATABASE, USER, PASSWORD, PG_PORT } = process.env;

module.exports = {

  development: {
    client: CLIENT,
    connection: {
      host    : HOST,
      port    : PG_PORT,
      user    : USER,
      password: PASSWORD,
      database: DATABASE
    },
    pool:{
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  },

  staging: {
    client: CLIENT,
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: CLIENT,
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
