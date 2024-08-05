const environment = process.env.ENVIRONMENT || 'development';
const config = require('../knexfile');
const knex = require('knex')(config[environment]);

module.exports = {
    knex
}