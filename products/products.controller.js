//Acts as the CONTROLLER for products in this app.
import * as productModel from "./products.model.js";

// GET products; GET products/{id}; GET products/categories; GET products/categories/{id}

// //GET products : Gets all data on all products
export async function getAllProducts(req,res) {
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
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// //GET products/categories/{id} : Gets all products in a certain category.
export async function getProductsInCategory(req, res) {
  try {
    let category = req.params.id;
    let products = await productModel.getProductsInCategory(category);
    res.json(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
}



