import express from "express";

import { customersRouter } from "./customers/customers.route.js";
import { cartsRouter } from "./carts/carts.route.js";
import { productsRouter } from "./products/products.route.js";

const app = express();
const PORT = 8000;

app.use(express.json());

//Routers
app.use(customersRouter);
app.use(cartsRouter);
app.use(productsRouter);

// From the tutorial.
app.get("/", (req, res) => res.send("Welcome to localhost 8000!"));
app.listen(PORT, () => console.log("DinoAPI listening on port 8000!"));
