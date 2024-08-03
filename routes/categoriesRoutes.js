const router = require('express').Router();
const categoriesController = require('../controllers/categoriesController');

router.route('/')
    .get(categoriesController.getCategories);

module.exports = router;