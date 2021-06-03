import express from "express";
import cors from "cors";

import { customersRouter } from "./customers/customers.route.js";
import { cartsRouter } from "./carts/carts.route.js";
import { productsRouter } from "./products/products.route.js";

const PORT = 8000;

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();
app.use(cors(corsOptions));

app.use(express.json());

//Routers
app.use(customersRouter);
app.use(cartsRouter);
app.use(productsRouter);

// From the tutorial.
app.get("/", (req, res) => res.send("Welcome to localhost 8000!"));
app.listen(PORT, () => console.log("DinoAPI listening on port 8000!"));
