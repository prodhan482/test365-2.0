import express from 'express';
import environment from  'dotenv';
import 'colors';

// const dotenv = require('dotenv').config();
// const colors = require('colors');
// const express = require('express');

import { errorHandler } from './middleware/errorMiddleware.js';
// const { errorHandler } = require('./middleware/errorMiddleware');
import connectDB from './config/db.js';
// const connectDB = require('./config/db');
import categoryRouter from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import subcategoryRoutes from './routes/subcategoryRoutes.js';

environment.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRouter); // Add category routes
app.use('/api/subcategories', subcategoryRoutes); // Add subcategory routes

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));