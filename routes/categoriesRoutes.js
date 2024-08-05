const router = require('express').Router();
const categoriesController = require('../controllers/categoriesController');

router.route('/')
    .get(categoriesController.getCategories)
    .post(categoriesController.addCategory)
    
router.route('/:id')
    .patch(categoriesController.updateCategory)
    .delete(categoriesController.deleteCategory)


module.exports = router;