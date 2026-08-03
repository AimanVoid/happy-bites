import Category from "../models/Category.js";
import asyncHandler from "../middleware/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

// Get all categories
export const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find().sort({ createdAt: -1 });

  res
    .status(200)
    .json(new ApiResponse(200, categories, "Categories fetched successfully"));
});

// Create category
export const createCategory = asyncHandler(async (req, res) => {
  const { name, image } = req.body;

  if (!name) {
    throw new ApiError(400, "Category name is required");
  }

  const existingCategory = await Category.findOne({ name });

  if (existingCategory) {
    throw new ApiError(409, "Category already exists");
  }

  const category = await Category.create({
    name,
    image,
  });

  res
    .status(201)
    .json(new ApiResponse(201, category, "Category created successfully"));
});