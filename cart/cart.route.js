//Acts as the ROUTER for carts in this app.
import express from "express";
import * as controller from "./cart.controller.js";

export const customerRouter = express.Router();

// middleware specific to this route
customerRouter.use(express.json());

//Route handlers
//Create a cart
customerRouter.post("/customers/:id/cart", controller.postCart);
//Modify a specific cart
customerRouter.get("/customers/:id/cart", controller.getCart);
customerRouter.put("/customers/:id/cart", controller.putCart);
customerRouter.delete("/customers/:id/cart", controller.deleteCart);
