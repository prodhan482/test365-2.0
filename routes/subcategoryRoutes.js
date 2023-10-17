const express = require('express');
const router = express.Router();
const subcategoryController = require('../controllers//subcategoryController'); // Create subcategory controller

router.route('/')
  .get(subcategoryController.getSubcategories)
  .post(subcategoryController.createSubcategory);

router.route('/:id')
  .put(subcategoryController.updateSubcategory)
  .delete(subcategoryController.deleteSubcategory);

module.exports = router;