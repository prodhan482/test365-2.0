import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';


const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();

  res.status(200).json(products);
});


const createProduct = asyncHandler(async (req, res) => {
  const {
    name,
    sku,
    image,
    plastic_id,
    price,
    discount,
    discounted_price,
    quantity_id,
    categories,
    description,
    details,
    brand_id,
    related_items_id,
    related_promotion_banner,
    product_sticker_id,
    visibility,
    created_by,
    updated_by,
  } = req.body;

  if (!name || !sku || !image || !price || !description || !stock) {
    res.status(400).json({ error: 'Please provide all required fields' });
  } else {
    const product = await Product.create({
      name,
      sku,
      image,
      plastic_id,
      price,
      discount,
      discounted_price,
      quantity_id,
      categories,
      description,
      details,
      brand_id,
      related_items_id,
      related_promotion_banner,
      product_sticker_id,
      visibility,
      created_by,
      updated_by,
    });

    res.status(201).json(product);
  }
});


const updateProductById = asyncHandler(async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);

  if (!product) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    const {
      name,
      sku,
      image,
      plastic_id,
      price,
      discount,
      discounted_price,
      quantity_id,
      categories,
      description,
      details,
      brand_id,
      related_items_id,
      related_promotion_banner,
      product_sticker_id,
      visibility,
      created_by,
      updated_by,
    } = req.body;

    product.name = name;
    product.sku = sku;
    product.image = image;
    product.plastic_id = plastic_id;
    product.price = price;
    product.discount = discount;
    product.discounted_price = discounted_price;
    product.quantity_id = quantity_id;
    product.categories = categories;
    product.description = description;
    product.details = details;
    product.brand_id = brand_id;
    product.related_items_id = related_items_id;
    product.related_promotion_banner = related_promotion_banner;
    product.product_sticker_id = product_sticker_id;
    product.visibility = visibility;
    product.created_by = created_by;
    product.updated_by = updated_by;

    await product.save();

    res.status(200).json(product);
  }
});


const deleteProductById = asyncHandler(async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);

  if (!product) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    await product.remove();
    res.status(204).json({ message: 'Product removed' });
  }
});

export { getProducts, createProduct, updateProductById, deleteProductById };
