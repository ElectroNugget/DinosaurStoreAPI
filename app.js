import express from "express";

const app = express();

const PORT = 8000;

app.use(express.json());

//Whenever the server is called, log to console.
app.use((req, res, next) => {
  console.log("A new request received at " + Date.now());
  next();
});

// /customers - POST only
app.post("/customers", (req, res) => {
    res.send(`{

    }`);
});



// /products
app.get("/products", (req, res) => {
  res.send(req.params);
});

// /products
app.get("/products", (req, res) => {
  res.send(req.params);
});

// /products
app.get("/products", (req, res) => {
  res.send(req.params);
});

// /products
app.get("/products", (req, res) => {
  res.send(req.params);
});

// /products
app.get("/products", (req, res) => {
  res.send(req.params);
});

// /products
app.get("/products", (req, res) => {
  res.send(req.params);
});

// /products
app.get("/products", (req, res) => {
  res.send(req.params);
});
