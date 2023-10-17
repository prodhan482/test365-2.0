const asyncHandler = require('express-async-handler');
const Category = require('../models/categoryModel');
const Product = require('../models/productModel');
const Subcategory = require('../models/subcategoryModel');


// @desc    Get all categories
// @route   GET /api/categories
// @access  Private
const getCategories = asyncHandler(async (req, res) => {
    const categories = await Category.find();

    res.status(200).json(categories);
});

// @desc    Create a category
// @route   POST /api/categories
// @access  Private
const createCategory = asyncHandler(async (req, res) => {
    if (!req.body.name) {
        res.status(400);
        throw new Error('Please provide a category name');
    }

    const category = await Category.create({
        name: req.body.name,
    });

    res.status(201).json(category);
});

// @desc    Update a category
// @route   PUT /api/categories/:id
// @access  Private
const updateCategory = asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);

    if (!category) {
        res.status(400);
        throw new Error('Category not found');
    }

    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updatedCategory);
});

// @desc    Delete a category
// @route   DELETE /api/categories/:id
// @access  Private
const deleteCategory = asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);

    if (!category) {
        res.status(400);
        throw new Error('Category not found');
    }

    await Category.deleteOne({ _id: req.params.id });

    res.status(200).json({ id: req.params.id });
});


// // @desc    Delete a category
// // @route   DELETE /api/categories/:id
// // @access  Public
// const deleteCategory = asyncHandler(async (req, res) => {
//     const categoryId = req.params.id;
  
//     try {
//       // Find the category
//       const category = await Category.findById(categoryId);
  
//       if (!category) {
//         return res.status(404).json({ error: 'Category not found' });
//       }
  
//       // Delete associated products
//       await Product.deleteMany({ category: categoryId });
  
//       // Delete associated subcategories
//       await Subcategory.deleteMany({ parentCategory: categoryId });
  
//       // Now, delete the category using the remove function
//       await category.remove();
  
//       res.status(204).json({ message: 'Category and associated products/subcategories removed' });
//     } catch (error) {
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
  

module.exports = {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory,
};
