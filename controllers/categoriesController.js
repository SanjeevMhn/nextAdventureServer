// const knex = require('../knex/knex').knex;
import knex from '../knex/knex.js';
import dotenv from 'dotenv';
import { CATEGORY_TBL } from '../CONSTANTS.js';

dotenv.config();


const getCategories = async (req, res) => {
    try {
        const categories = await knex.select('*').from(CATEGORY_TBL);
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

        let checkDuplicate = await knex.select('*').from(CATEGORY_TBL).where('cat_name', cat_name);

        if (checkDuplicate.length > 0) {
            return res.status(400).json({
                message: 'Category already exists'
            })
        }

        await knex(CATEGORY_TBL).insert({
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

const updateCategory = async (req, res) => {
    try {
        const cat_id = req.params.id;
        const updates = req.body;

        if (cat_id == null || cat_id == '') {
            return res.status(400).json({
                message: 'Category id not found'
            });
        }

        const checkCatExists = await knex.select('*').from(CATEGORY_TBL).where('cat_id', cat_id);

        if (checkCatExists.length == 0) {
            return res.status(400).json({
                message: 'Category doesnot exist'
            })
        }

        await knex(CATEGORY_TBL).update(updates).where('cat_id', cat_id);
        res.status(200).json({
            status: 'success',
            message: 'Category updated successfully'
        })



    } catch (err) {
        console.error(err);
        throw err;
    }
}

const deleteCategory = async (req, res) => {
    try {
        const cat_id = req.params.id;
        if (cat_id == '' || cat_id == null || !cat_id) {
            return res.status(400).json({
                message: 'Category not found'
            })
        }

        const delCat = await knex.select('*').from(CATEGORY_TBL).where('cat_id', cat_id);
        if (delCat.length == 0) {
            return res.status(400).json({
                message: 'Category not found'
            })
        }

        await knex(CATEGORY_TBL).del().where('cat_id', cat_id);
        res.status(200).json({
            status: 'success',
            message: 'Category deleted successfully'
        });

    } catch (err) {
        console.error(err);
        throw err;
    }
}

export {
    getCategories,
    addCategory,
    updateCategory,
    deleteCategory
}