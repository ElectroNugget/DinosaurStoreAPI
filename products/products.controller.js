//Acts as the CONTROLLER for products in this app.
import * as productModel from "./products.model.js";

// //GET products : Gets all data on all products
export async function getAllProducts(req, res) {
  try {
    let products = await productModel.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// //GET products{id} : Gets all data on a given product, if it exists
export async function getProduct(req, res) {
  try {
    let id = parseInt(req.params.id);
    let product = await productModel.getByID(id);
    res.json(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// //GET products/categories : Gets all product categories
export async function getAllCategories(req, res) {
  try {
    let categories = await productModel.getAllCategories();
    res.json(categories);
    console.log(categories);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// //GET products/categories/:key/:value : Gets all products in a certain category.
// //The category must be provided as a key-value pair.
export async function getProductsInCategory(req, res) {
  try {
    let categoryKey = req.params.key;
    let categoryValue = req.params.value;
    // console.log("catkey and value:" + categoryKey + " " + categoryValue);
    let products = await productModel.getProductsInCategory(
      categoryKey,
      categoryValue
    );
    res.json(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
}
