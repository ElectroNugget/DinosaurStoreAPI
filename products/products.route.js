//Acts as the ROUTER for products in this app.
import express from "express";
import {
  getAllProducts,
  getAllCategories,
  getProductsInCategory,
  getProduct,
} from "./products.controller.js";

export const productsRouter = express.Router();

//middleware specific to this route
productsRouter.use(express.json());

//Route handlers
//Get all products.
productsRouter.get("/products", getAllProducts);
//Get all categories.
productsRouter.get("/products/categories", getAllCategories);
//Get products in a certain category.
productsRouter.get("/products/categories/:key/:value", getProductsInCategory);
//Get a specific product.
productsRouter.get("/products/:id", getProduct);
