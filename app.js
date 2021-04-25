import express from "express";

const app = express();

const PORT = 8000;

app.use(express.json());

// From the tutorial.
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(PORT, () => console.log('Example app listening on port 8000!'));

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
