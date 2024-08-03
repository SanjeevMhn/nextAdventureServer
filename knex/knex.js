const environment = process.env.ENVIRONMENT || 'development';
const config = require('../knexfile');
const knex = require('../node_modules/knex/knex')(config[environment]);

module.exports = {
    knex
}