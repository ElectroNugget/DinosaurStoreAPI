//Acts as the ROUTER for products in this app.
import express from "express";
import { getAllProducts, getAllCategories, getProductsInCategory, getProduct } from "./products.controller.js";

export const productRouter = express.Router();

//middleware specific to this route
productRouter.use(express.json());

//Route handlers
//Get all products.
productRouter.get("/products", getAllProducts);
//Get all categories.
productRouter.get("/products/categories", getAllCategories);
//Get products in a certain category.
productRouter.get("/products/categories/:id", getProductsInCategory);
//Get a specific product.
productRouter.get("/products/:id", getProduct);
