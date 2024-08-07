import express from 'express';
import { getCategories, addCategory, updateCategory, deleteCategory } from '../controllers/categoriesController.js'

const categoryRouter = express.Router();


categoryRouter.route('/')
    .get(getCategories)
    .post(addCategory)
    
categoryRouter.route('/:id')
    .patch(updateCategory)
    .delete(deleteCategory)


export default categoryRouter;