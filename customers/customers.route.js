//Acts as the ROUTER for customers in this app.
import express from "express";
import * as controller from "./customers.controller.js";

export const customerRouter = express.Router();

// middleware specific to this route
customerRouter.use(express.json());

//Route handlers

//Create a customer
customerRouter.post("/customers", controller.postCustomer);
//Modify specific customer
customerRouter.get("/customers/:id", controller.getCustomer);
customerRouter.put("/customers/:id", controller.putCustomer);
customerRouter.delete("/customers/:id", controller.deleteCustomer);

//Cart functions
customerRouter.post("/customers/:id/cart", controller.postCart);
customerRouter.get("/customers/:id/cart", controller.getCart);
customerRouter.put("/customers/:id/cart", controller.putCart);
customerRouter.delete("/customers/:id/cart", controller.deleteCart);
