//Acts as the ROUTER for customers in this app.
import express from "express";
import { postCustomer, getCustomer, putCustomer, deleteCustomer } from "./customers.controller.js";

export const customersRouter = express.Router();

// middleware specific to this route
customersRouter.use(express.json());

//Route handlers

//Create a customer
customersRouter.post("/customers", postCustomer);
//Modify specific customer
customersRouter.get("/customers/:id", getCustomer);
customersRouter.put("/customers/:id", putCustomer);
customersRouter.delete("/customers/:id", deleteCustomer);
