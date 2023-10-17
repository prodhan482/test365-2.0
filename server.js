const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes')); // Add category routes
app.use('/api/subcategories', require('./routes/subcategoryRoutes')); // Add subcategory routes

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));