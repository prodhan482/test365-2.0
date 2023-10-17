const asyncHandler = require('express-async-handler')

const Product = require('../models/productModel')


// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find()

  res.status(200).json(products)
})

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setProduct = asyncHandler(async (req, res) => {
  const { name, description, price, category, brand, image, stock } = req.body;

  if (!name || !description || !price || !category || !image || !stock) {
    res.status(400).json({ error: 'Please provide all required fields' });
  } else {
    const product = await Product.create({
      name,
      description,
      price,
      category,
      brand,
      image,
      stock,
    });

    res.status(201).json(product);
  }
})

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateProduct = asyncHandler(async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);

  if (!product) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    const { name, description, price, category, brand, image, stock } = req.body;

    product.name = name;
    product.description = description;
    product.price = price;
    product.category = category;
    product.brand = brand;
    product.image = image;
    product.stock = stock;

    await product.save();

    res.status(200).json(product);
  }
})

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteProduct = asyncHandler(async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);

  if (!product) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    await product.remove();
    res.status(204).json({ message: 'Product removed' });
  }
})

module.exports = {
  getProducts,
  setProduct,
  updateProduct,
  deleteProduct,
}
