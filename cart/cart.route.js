//Acts as the ROUTER for carts in this app.
import express from "express";
import * as controller from "./cart.controller.js";

export const cartRouter = express.Router();

// middleware specific to this route
cartRouter.use(express.json());

//Route handlers
//Create a cart
cartRouter.post("/customers/:id/cart", controller.postCart);
//Modify a specific cart
cartRouter.get("/customers/:id/cart", controller.getCart);
cartRouter.put("/customers/:id/cart", controller.putCart);
cartRouter.delete("/customers/:id/cart", controller.deleteCart);
