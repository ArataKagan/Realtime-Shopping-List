require('dotenv').config();
module.exports = {
  "development": {
    "username": "root",
    "password": process.env.DB_PASS,
    "database": "shopping-list-dev",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": false,
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": process.env.DB_PASS,
    "database": "shopping-list-test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": false,
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
};