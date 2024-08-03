const knex = require('../knex/knex').knex;
require('dotenv').config();

const getCategories = async (req,res) => {
    try{
        const categories = await knex.select('*').from('destination_category');
        res.status(200).json({
            status: 'success',
            categories: categories
        })
    }catch(err){
        console.error(err);
        throw err;
    }
}

module.exports ={
    getCategories
}