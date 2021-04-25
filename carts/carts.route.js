//Acts as the ROUTER for carts in this app.
import express from "express";
import * as controller from "./carts.controller.js";

export const cartsRouter = express.Router();

// middleware specific to this route
cartsRouter.use(express.json());

//Route handlers
//Create a cart
cartsRouter.post("/customers/:id/cart", controller.postCart);
//Modify a specific cart
cartsRouter.get("/customers/:id/cart", controller.getCart);
cartsRouter.put("/customers/:id/cart", controller.putCart);
cartsRouter.delete("/customers/:id/cart", controller.deleteCart);
