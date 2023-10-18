import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const categorySchema = new Schema({
  category_name: {
    type: String,
    required: true,
  },
  parent_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
  tree_path: {
    type: String,
  },
  level: {
    type: Number,
    default: 0,
  },
  Enable: {
    type: Boolean,
    default: true,
  },
  include_menu: {
    type: Boolean,
    default: true,
  },
  category_image: {
    type: String,
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

export default model('Category', categorySchema);