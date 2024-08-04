const knex = require('../knex/knex').knex;
require('dotenv').config();

const getCategories = async (req, res) => {
    try {
        const categories = await knex.select('*').from('destination_category');
        res.status(200).json({
            status: 'success',
            categories: categories
        })
    } catch (err) {
        console.error(err);
        throw err;
    }
}

const addCategory = async (req, res) => {
    try {
        const { cat_name, cat_parent_id } = req.body;

        if (cat_name == '' || cat_name == null) {
            return res.status(400).json({
                message: 'Category name is required.'
            })
        }

        await knex('destination_category').insert({
            cat_name: cat_name,
            cat_parent_id: cat_parent_id ? cat_parent_id : null
        })

        res.status(201).json({
            status: 'success',
            message: 'Category has been added'
        })

    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports = {
    getCategories,
    addCategory
}