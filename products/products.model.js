//Acts as the MODEL for products in this app.
import * as fs from "fs";
import { promisify } from "util";
const PRODUCTS_FILE = "./products/products.json";
const CATEGORIES_FILE = "./products/categories.json";

// Convert fs.readFile + writeFile into Promise version of same
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

//Get a product by a given ID. Returns an error if it does not exist.
export async function getByID(productId) {
  let productArray = await readProductsFile();
  let index = find(productArray, productId);
  if (index === -1) {
    throw new Error(`Product with ID: ${productId} doesn't exist`);
  } else {
    return productArray[index];
  }
}

//Gets all products available.
export async function getAllProducts() {
  let productArray = await readProductsFile();
  if (productArray.length === 0) {
    throw new Error("No products found.");
  } else {
    return productArray;
  }
}

//Gets all categories available.
export async function getAllCategories() {
  let categoryArray = await readCategoryFile();
  if (categoryArray.length === 0) {
    throw new Error("No categories found.");
  } else {
    return categoryArray;
  }
}

//Gets all products in a given category.
export async function getProductsInCategory(categoryKey, categoryValue) {
  let productArray = await readProductsFile();
  let categoryProductArray = productArray.filter(
    (dinosaur) => dinosaur[categoryKey] === categoryValue
  );
  console.log(categoryProductArray);
  if (categoryProductArray.length === 0) {
    throw new Error("No products in selected category.");
  } else {
    return categoryProductArray;
  }
}

//HELPER FUNCTIONS://----------------------------------------------------------
//Return all products on file.
export async function readProductsFile() {
  try {
    let productsText = await readFile(PRODUCTS_FILE);
    let products = JSON.parse(productsText);
    return products;
  } catch (error) {
    if (error.code === "ENOENT") {
      await save([]);
      return [];
    } else {
      throw error;
    }
  }
}

export async function readCategoryFile() {
  try {
    let categoryText = await readFile(CATEGORIES_FILE);
    let categories = JSON.parse(categoryText);
    return categories;
  } catch (error) {
    if (error.code === "ENOENT") {
      await save([]);
      return [];
    } else {
      throw error;
    }
  }
}

//Save an array of products to file.
async function save(products = []) {
  let productsText = JSON.stringify(products);
  await writeFile(PRODUCTS_FILE, productsText);
}

//Test function to check if product ID exists.
function find(productArray, Id) {
  return productArray.findIndex((currProduct) => currProduct.productId === Id);
}
