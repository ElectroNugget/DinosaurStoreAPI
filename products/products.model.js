//Acts as the MODEL for products in this app.
import * as fs from "fs/promises";
const PRODUCTS_FILE = "./products/products.json";

//Need a tonne of GET methods here...

//Return all products on file.
export async function getAll() {
  try {
    let productsText = await fs.readFile(PRODUCTS_FILE);
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

// //Save an array of products to file.
// async function save(products = []) {
//   let productsText = JSON.stringify(products);
//   await fs.writeFile(PRODUCTS_FILE, productsText);
// }

//Test function to check if product ID exists.
function find(productArray, Id) {
  return productArray.findIndex(
    (currProduct) => currProduct.productId === Id
  );
}

//Get a product by a given ID. Returns an error if it does not exist.
export async function getByID(productId) {
  let productArray = await getAll();
  let index = find(productArray, productId);
  if (index === -1) {
    throw new Error(`Product with ID: ${productId} doesn't exist`);
  } else {
    return productArray[index];
  }
}
