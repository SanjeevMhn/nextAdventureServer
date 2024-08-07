import dotenv from 'dotenv';
import config from '../knexfile.js';
import knex from 'knex';

dotenv.config(); 
const environment = process.env.ENVIRONMENT || 'development';


export default knex(config[environment]);;