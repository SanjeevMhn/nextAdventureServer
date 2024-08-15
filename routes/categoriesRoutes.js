import express from 'express';
import {
    getCategories, 
    addCategory, 
    updateCategory, 
    deleteCategory
} from '../controllers/categoriesController.js'

const categoryRouter = express.Router();

/**
 * @swagger
 * tags:
 *     name: Destination Categories
 *     description: Get all the categories
 * /api/v1/categories:
 *     get:
 *       summary: Get a list of destination categories
 *       description: Retrieve a list of destination categories from the database 
 *       tags: [Destination Categories]
 *       responses:
 *         200:
 *           description: Success
 *     post:
 *       summary: Add new category to the list of categories
 *       description: Insert new category item to the database
 *       tags: [Destination Categories]
 *       requestBody:
 *          required: true
 *          content:
 *             application/json:
 *              schema:
 *                 type: object
 *                 required:
 *                    - cat_name
 *                    - cat_parent_id
 *                 properties:
 *                   cat_name:
 *                      type: string
 *                      default: trekking 
 *                   cat_parent_id:
 *                      type: number
 *                      default: null
 *       responses: 
 *          201:
 *             description: Success
 * 
 *     patch:
 *       summary: Update existing category from the list of categories
 *       description: Update existing category from the list of categories
 *       tags: [Destination Categories]
 *       parameters:
 *         - id: id
 *           in: path
 *           description: The id of the category you want to update
 *           required: true
 *       requestBody:
 *          required: false
 *          content: 
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  cat_name:
 *                    type: string
 *                    default: trekking
 *                  cat_parent_id:
 *                    type: number
 *                    default: null
 *     
 * 
 *     delete:
 *       summary: Delete the category from the category list
 *       description: Delete the category from the database
 *       tags: [Destination Categories]
 *       parameters:
 *         - id: id
 *           in: path
 *           description: Id of the category to delete
 *           required: true
 *       responses:
 *          200:
 *            description: Success  
 *         
 *          
 */

categoryRouter.route('/')
    .get(getCategories)
    .post(addCategory)
    
categoryRouter.route('/:id')
    .patch(updateCategory)
    .delete(deleteCategory)


export default categoryRouter; ``