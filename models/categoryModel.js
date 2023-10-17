const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
});

// Define a pre middleware to delete products and subcategories when a category is deleted
categorySchema.pre('remove', async function (next) {
    // Assuming 'Product' and 'Subcategory' are your respective model names
    await this.model('Product').deleteMany({ category: this._id });
    await this.model('Category').deleteMany({ parentCategory: this._id });
  
    next();
  });

module.exports = mongoose.model('Category', categorySchema);