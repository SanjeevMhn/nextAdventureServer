const router = require('express').Router();
const categoriesController = require('../controllers/categoriesController');

router.route('/')
    .get(categoriesController.getCategories)
    .post(categoriesController.addCategory)


module.exports = router;