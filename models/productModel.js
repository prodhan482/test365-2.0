import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  plastic_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plastic', 
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Boolean,
    default: false,
  },
  discounted_price: {
    type: Number,
  },
  quantity_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quantity', 
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category', 
    },
  ],
  description: {
    type: String,
    required: true,
  },
  details: {
    type: String,
  },
  brand_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand', 
  },
  related_items_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RelatedItems',
  },
  related_promotion_banner: {
    type: String,
  },
  product_sticker_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductSticker',
  },
  visibility: {
    type: Boolean,
    default: true,
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  updated_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
},
{
  timestamps: true,
});

export default model('Product', productSchema);
