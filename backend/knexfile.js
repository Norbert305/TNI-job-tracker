/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

 require('dotenv').config();
 const path = require("path");

 const {
   DATABASE_URL = "postgres://mvdbitje:Dp87WZz0TRzw6FzkmHAP_z6DFkRJCC74@castor.db.elephantsql.com/mvdbitje",
   DATABASE_URL_DEVELOPMENT="postgres://mvdbitje:Dp87WZz0TRzw6FzkmHAP_z6DFkRJCC74@castor.db.elephantsql.com/mvdbitje",
   DATABASE_URL_PRODUCTION="postgres://mvdbitje:Dp87WZz0TRzw6FzkmHAP_z6DFkRJCC74@castor.db.elephantsql.com/mvdbitje"
  } = process.env;


module.exports = {

  development: {
    client: 'postgresql',
    connection: DATABASE_URL_DEVELOPMENT,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: 'postgresql',
    connection: DATABASE_URL_PRODUCTION,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  }

};
