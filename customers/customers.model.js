//Acts as the MODEL for customers in this app.
import * as fs from "fs";
import { promisify } from "util";
const CUSTOMERS_FILE = "./customers/customers.json";

// Convert fs.readFile + writeFile into Promise version of same    
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
// Makes logging a little less boilerplate.
const log = console.log();

//Get a customer by a given ID. Returns an error if it does not exist.
export async function getByID(customerId) {
  let customersObject = await getAll();
  let index = find(customersObject.customers, customerId);
  if (index === -1) {
    throw new Error(`Customer with ID: ${customerId} doesn't exist.`);
  } else {
    return customersObject.customers[index];
  }
}

export async function getByEmail(customerEmail) {
  let customersObject = await getAll();
  let index = findEmail(customersObject.customers, customerEmail);
  if (index === -1) {
    throw new Error(`Customer with email: ${customerEmail} doesn't exist.`);
  } else {
    return customersObject.customers[index];
  }
}

//Create a new customer. Returns an error if the given email is already taken.
export async function add(newCustomer) {
  let customersObject = await getAll();
  if (findEmail(customersObject.customers, newCustomer.email) !== -1) {
    throw new Error(
      `Customer with this email already exists.`
    );
  } else {
    newCustomer.customerId = ++customersObject.count;
    customersObject.customers.push(newCustomer);
    await save(customersObject);
  }
}

//Update an existing customer. Returns an error if there's no customer at the given ID.
export async function update(customerId, customer) {
  let customersObject = await getAll();
  let index = find(customersObject.customers, customerId);
  if (index === -1) {
    throw new Error(`Customer with ID: ${customerId} doesn't exist.`);
  } else {
    customersObject.customers[index] = customer;
    await save(customersObject);
  }
}

//Delete an existing customer. Returns an error if there's no customer at the given ID.
export async function remove(customerId) {
  let customersObject = await getAll();
  let index = find(customersObject.customers, customerId);
  if (index === -1) {
    throw new Error(`Customer with ID: ${customerId} doesn't exist.`);
  } else {
    customersObject.customers.splice(index, 1); // remove customer from array
    await save(customersObject);
  }
}

//HELPER FUNCTIONS://----------------------------------------------------------
//Return all customers on file.
export async function getAll() {
  try {
    let customersText = await readFile(CUSTOMERS_FILE);
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

//Save an array of customers to file.
async function save(customers = []) {
  let customersText = JSON.stringify(customers);
  await writeFile(CUSTOMERS_FILE, customersText);
}

//Test function: Checks if a customer with the given Id exists..
function find(custIdArray, Id) {
  return custIdArray.findIndex(
    (currCustomer) => currCustomer.customerId === Id
  );
}

//Test function: Checks if a customer with the given email exists.
function findEmail(custEmailArray, email) {
  return custEmailArray.findIndex(
    (currCustomer) => currCustomer.email === email
  );
}
