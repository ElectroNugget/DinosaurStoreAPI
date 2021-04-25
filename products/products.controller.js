//Acts as the CONTROLLER for products in this app.
import * as productModel from "./products.model.js";

// GET products; GET products/categories; GET products/categories/{id}; GET products/{id}

// //GET products{id} : Gets all data on all products
export async function getProducts(req, res) {
  try {
    //Fill this in
    //   let id = parseInt(req.params.id);
    //   let product = await productModel.getByID(id);
    //   res.json(product); //How is this sent?
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// //GET products/categories : Gets all product categories
export async function getCategories(req, res) {
  try {
    //Fill this in
    //   let id = parseInt(req.params.id);
    //   let product = await productModel.getByID(id);
    //   res.json(product); //How is this sent?
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// //GET products/categories/{id} : Gets all products in a certain category.
export async function getProductsInCategory(req, res) {
  try {
    //Fill this in
    //   let id = parseInt(req.params.id);
    //   let product = await productModel.getByID(id);
    //   res.json(product); //How is this sent?
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// //GET products{id} : Gets all data on a given product, if it exists
export async function getProduct(req, res) {
  try {
    let id = parseInt(req.params.id);
    let product = await productModel.getByID(id);
    res.json(product); //How is this sent?
  } catch (error) {
    res.status(400).send(error.message);
  }
}
