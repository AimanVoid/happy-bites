import Product from "../models/Product.js";
import Category from "../models/Category.js";

import asyncHandler from "../middleware/asyncHandler.js";

import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";


// @desc Get all products
// @route GET /api/products
// @access Public

export const getProducts = asyncHandler(async (req, res) => {
  const filter = {};

if (req.query.featured === "true") {
  filter.isFeatured = true;
}

const products = await Product.find(filter)
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





// @desc Get single product
// @route GET /api/products/:id
// @access Public

export const getProductById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id).populate("category", "name");

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  res.status(200).json(
    new ApiResponse(
      200,
      product,
      "Product fetched successfully"
    )
  );
});


// @desc Update Product
// @route PUT /api/products/:id
// @access Admin (abhi Public)

export const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

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

  // Agar category update ho rahi hai to verify bhi karo
  if (category) {
    const existingCategory = await Category.findById(category);

    if (!existingCategory) {
      throw new ApiError(404, "Category not found");
    }
  }

  product.name = name ?? product.name;
  product.price = price ?? product.price;
  product.description = description ?? product.description;
  product.category = category ?? product.category;
  product.stock = stock ?? product.stock;
  product.images = images ?? product.images;
  product.ingredients = ingredients ?? product.ingredients;
  product.isFeatured = isFeatured ?? product.isFeatured;
  product.isBestSeller = isBestSeller ?? product.isBestSeller;

  const updatedProduct = await product.save();

  res.status(200).json(
    new ApiResponse(
      200,
      updatedProduct,
      "Product updated successfully"
    )
  );
});


// @desc Delete Product
// @route DELETE /api/products/:id
// @access Admin (abhi Public)

export const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  await product.deleteOne();

  res.status(200).json(
    new ApiResponse(
      200,
      null,
      "Product deleted successfully"
    )
  );
});