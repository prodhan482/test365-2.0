const asyncHandler = require('express-async-handler');
const Subcategory = require('../models/subcategoryModel');

// @desc    Get all subcategories
// @route   GET /api/subcategories
// @access  Private
const getSubcategories = asyncHandler(async (req, res) => {
    const subcategories = await Subcategory.find();

    res.status(200).json(subcategories);
});

// @desc    Create a subcategory
// @route   POST /api/subcategories
// @access  Private
const createSubcategory = asyncHandler(async (req, res) => {
    if (!req.body.name) {
        res.status(400);
        throw new Error('Please provide a subcategory name');
    }

    const subcategory = await Subcategory.create({
        name: req.body.name,
    });

    res.status(201).json(subcategory);
});

// @desc    Update a subcategory
// @route   PUT /api/subcategories/:id
// @access  Private
const updateSubcategory = asyncHandler(async (req, res) => {
    const subcategory = await Subcategory.findById(req.params.id);

    if (!subcategory) {
        res.status(400);
        throw new Error('Subcategory not found');
    }

    const updatedSubcategory = await Subcategory.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updatedSubcategory);
});

// @desc    Delete a subcategory
// @route   DELETE /api/subcategories/:id
// @access  Private
const deleteSubcategory = asyncHandler(async (req, res) => {
    const subcategory = await Subcategory.findById(req.params.id);

    if (!subcategory) {
        res.status(400);
        throw new Error('Subcategory not found');
    }

    await Subcategory.deleteOne({ _id: req.params.id });

    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getSubcategories,
    createSubcategory,
    updateSubcategory,
    deleteSubcategory,
};
