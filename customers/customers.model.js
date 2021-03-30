import * as fs from "fs/promises";
const CUSTOMERS_FILE = "./customers/customers.json";

// return all customers from a file
export async function getAll() {
  try {
    let customersTxt = await fs.readFile(CUSTOMERS_FILE);
    let customers = JSON.parse(customersTxt);
    return customers;
  } catch (err) {
    if (err.code === "ENOENT") {
      // file does not exist
      await save([]); // create a new file with an empty array
      return []; // return empty array
    } // // cannot handle this exception, so rethrow
    else throw err;
  }
}

// save array of customers to file
async function save(customers = []) {
  let customersTxt = JSON.stringify(customers);
  await fs.writeFile(CUSTOMERS_FILE, customersTxt);
}

// test function that checks for a given customer ID
function findCustomer(customerArray, Id) {
  return customerArray.findIndex(
    (currCustomer) => currCustomer.customerId === Id
  );
}

// get customer by ID
export async function getByID(customerId) {
  let customerArray = await getAll();
  let index = findCustomer(customerArray, customerId);
  if (index === -1)
    throw new Error(`Customer with ID: ${customerId} does not exist`);
  else return customerArray[index];
}

// create a new customer
export async function add(newCustomer) {
  let customerArray = await getAll();
  if (findCustomer(customerArray, newCustomer.customerId) !== -1)
    throw new Error(
      `Customer with ID: ${newCustomer.customerId} already exists`
    );
  customerArray.push(newCustomer);
  await save(customerArray);
}

// update existing customer
export async function update(customerId, customer) {
  let customerArray = await getAll();
  let index = findCustomer(customerArray, customerId); // findIndex
  if (index === -1)
    throw new Error(`Customer with ID: ${customerId} does not exist`);
  else {
    customerArray[index] = customer;
    await save(customerArray);
  }
}

// delete existing customer
export async function remove(customerId) {
  let customerArray = await getAll();
  let index = findCustomer(customerArray, customerId); // findIndex
  if (index === -1)
    throw new Error(`Customer with ID: ${customerId} does not exist`);
  else {
    customerArray.splice(index, 1); // remove customer from array
    await save(customerArray);
  }
}
