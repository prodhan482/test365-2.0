import asyncHandler from "express-async-handler";
import Subcategory from "../models/subcategoryModel.js";

const getSubcategories = asyncHandler(async (req, res) => {
  const subcategories = await Subcategory.find();

  res.status(200).json(subcategories);
});

const createSubcategory = asyncHandler(async (req, res) => {
  const { name } = req.body.name;

  if (!name) {
    res.status(400);
    throw new Error("Please provide a subcategory name");
  }

  const subcategory = await Subcategory.create({
    name: name,
  });

  res.status(201).json(subcategory);
});

const updateSubcategory = asyncHandler(async (req, res) => {
  const { id } = req.params.id;
  const { name } = req.body;
  const subcategory = await Subcategory.findById(id);

  if (!subcategory) {
    res.status(400);
    throw new Error("Subcategory not found");
  }

  const updatedSubcategory = await Subcategory.findByIdAndUpdate(id, name, {
    new: true,
  });

  res.status(200).json(updatedSubcategory);
});



const deleteSubcategory = asyncHandler(async (req, res) => {
  const { id } = req.params.id;

  const subcategory = await Subcategory.findById(id);

  if (!subcategory) {
    res.status(400);
    throw new Error("Subcategory not found");
  }

  await Subcategory.deleteOne({ _id: id });

  res.status(200).json({ id: id });
});

export {
  getSubcategories,
  createSubcategory,
  updateSubcategory,
  deleteSubcategory
};
