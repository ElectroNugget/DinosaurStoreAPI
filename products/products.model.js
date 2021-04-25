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

//Test function to check if customer ID exists.
function find(customerArray, Id) {
  return customerArray.findIndex(
    (currCustomer) => currCustomer.customerId === Id
  );
}

//Get a customer by a given ID. Returns an error if it does not exist.
export async function getByID(customerId) {
  let customerArray = await getAll();
  let index = find(customerArray, customerId);
  if (index === -1) {
    throw new Error(`Customer with ID: ${customerId} doesn't exist`);
  } else {
    return customerArray[index];
  }
}

// //Create a new customer. Returns an error if the ID is already taken.
// export async function add(newCustomer) {
//   let customerArray = await getAll();
//   if (find(customerArray, newCustomer.customerId) !== -1) {
//     throw new Error(
//       `Customer with ID: ${newCustomer.customerId} already exists`
//     );
//   } else {
//     customerArray.push(newCustomer);
//     await save(customerArray);
//   }
// }

// //Update an existing customer. Returns an error if there's no customer at the given ID.
// export async function update(customerId, customer) {
//   let customerArray = await getAll();
//   let index = find(customerArray, customerId);
//   if (index === -1) {
//     throw new Error(`Customer with ID: ${customerId} doesn't exist`);
//   } else {
//     customerArray[index] = customer;
//     await save(customerArray);
//   }
// }

// //Delete an existing customer. Returns an error if there's no customer at the given ID.
// export async function update(customerId) {
//   let customerArray = await getAll();
//   let index = find(customerArray, customerId);
//   if (index === -1) {
//     throw new Error(`Customer with ID: ${customerId} doesn't exist`);
//   } else {
//     customerArray.splice(index, 1); // remove customer from array
//     await save(customerArray);
//   }
// }