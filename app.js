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

// //Simple request time logger for a specific route
// app.use('/home', (req, res, next) => {
//   console.log('A new request received at ' + Date.now());
//   next();
// });

// app.get('/home', (req, res) => {
//   res.send('Home Page');
// });

// app.get('/about', (req, res) => {
//   res.send('About Page');
// });

//Whenever the server is called, log to console.
// app.use((req, res, next) => {
//   console.log("A new request received at " + Date.now());
//   next();
// });

// app.get("/customers/:id", (req, res) => {
//   res.send(req.params);
// });

// // /customers - POST only
// app.post("/customers", (req, res) => {
//   res.send(`{

//     }`);
// });

// // /products
// app.get("/products", (req, res) => {});

// // For invalid routes
// app.get("*", (req, res) => {
//   res.send("404! This is an invalid URL.");
// });

// app.listen(PORT, function (err) {
//   if (err) console.log("Error in server setup");
//   console.log("Server listening on Port", PORT);
// });
