import Product from "../models/Product.js";
import Category from "../models/Category.js";

import asyncHandler from "../middleware/asyncHandler.js";

import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";


// @desc Get all products
// @route GET /api/products
// @access Public

export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find()
    .populate("category", "name")
    .sort({ createdAt: -1 });

  res.status(200).json(
    new ApiResponse(
      200,
      products,
      "Products fetched successfully"
    )
  );
});

// @desc Create Product
// @route POST /api/products
// @access Public (abhi, baad mein Admin)

export const createProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    category,
    stock,
    images,
    ingredients,
    isFeatured,
    isBestSeller,
  } = req.body;

  if (!name || !price || !description || !category) {
    throw new ApiError(
      400,
      "Name, price, description and category are required"
    );
  }

  // Check if category exists
  const existingCategory = await Category.findById(category);

  if (!existingCategory) {
    throw new ApiError(404, "Category not found");
  }

  const product = await Product.create({
    name,
    price,
    description,
    category,
    stock,
    images,
    ingredients,
    isFeatured,
    isBestSeller,
  });

  res
    .status(201)
    .json(new ApiResponse(201, product, "Product created successfully"));
});