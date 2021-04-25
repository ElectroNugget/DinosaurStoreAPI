//Acts as the MODEL for products in this app.
import * as fs from "fs/promises";
const PRODUCTS_FILE = "./products/products.json";

//Need a tonne of GET methods here...

//Return all products on file.
export async function getAll() {
  try {
    let customersText = await fs.readFile(PRODUCTS_FILE);
    let customers = JSON.parse(customersText);
    return customers;
  } catch (error) {
    if (error.code === "ENOENT") {
      await save([]);
      return [];
    } else {
      throw error;
    }
  }
}

// //Save an array of customers to file.
// async function save(customers = []) {
//   let customersText = JSON.stringify(customers);
//   await fs.writeFile(PRODUCTS_FILE, customersText);
// }

//Test function to check if product ID exists.
function find(productArray, Id) {
  return productArray.findIndex(
    (currProduct) => currProduct.productId === Id
  );
}

//Get a customer by a given ID. Returns an error if it does not exist.
export async function getByID(productId) {
  let productArray = await getAll();
  let index = find(productArray, productId);
  if (index === -1) {
    throw new Error(`Product with ID: ${customerId} doesn't exist`);
  } else {
    return customerArray[index];
  }
}
