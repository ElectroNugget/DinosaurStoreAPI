//Acts as the ROUTER for products in this app.
import express from "express";
import * as controller from "./products.controller.js";

export const productRouter = express.Router();

//middleware specific to this route
productRouter.use(express.json());

//Route handlers
productRouter.get("/products", controller.getProducts);
productRouter.get("/products/categories", controller.getCategories);
productRouter.get("/products/categories/:id", controller.getSpecificProducts);
productRouter.get("/products/:id", controller.getSpecificProduct);
