//Acts as the ROUTER for customers in this app.
import express from "express";
import { postCustomer, getCustomer, putCustomer, deleteCustomer, loginCustomer } from "./customers.controller.js";

export const customersRouter = express.Router();

customersRouter.use(express.json());

//Route handlers
customersRouter.post("/customers", postCustomer);
customersRouter.get("/customers/:id", getCustomer);
customersRouter.post("/customers/login", loginCustomer);
customersRouter.put("/customers/:id", putCustomer);
customersRouter.delete("/customers/:id", deleteCustomer);
