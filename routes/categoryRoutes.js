const express = require('express');
const router = express.Router();
const categoryController = require('../controllers//categoryController');

router.route('/')
  .get(categoryController.getCategories)
  .post(categoryController.createCategory);

router.route('/:id')
  .put(categoryController.updateCategory)
  .delete(categoryController.deleteCategory);

module.exports = router;