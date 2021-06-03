//Acts as the CONTROLLER for customers in this app.
import * as customerModel from "./customers.model.js";

// Makes logging a little less boilerplate.
const log = console.log;

// //POST customers : Creates a new customer
export async function postCustomer(req, res) {
  try {
    let newCustomer = req.body;
    log("Calling postCustomer with this data:",newCustomer);
    //This returns the new customerId as a kind of primitive cookie.
    let newCustomerId = await customerModel.add(newCustomer);
    res.json(newCustomerId);
    res.end();
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// //GET customers{id} : Gets all data on a given customer, if it exists
export async function getCustomer(req, res) {
  try {
    let id = parseInt(req.params.id);
    log("Calling getCustomer with this id:", id)
    let customer = await customerModel.getByID(id); 
    res.json(customer); 
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// //GET customers/login : Gets all data on a given customer, if it exists
export async function loginCustomer(req, res) {
  try {
    log("Calling loginCustomer before JSON.parse with this req.body", req.body)
    let email = req.body.email;
    log("Calling loginCustomer with this email:", email)
    let customer = await customerModel.getByEmail(email); 
    res.json(customer);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// //PUT customers{id} : Update data on a given customer, if it exists
export async function putCustomer(req, res) {
  try {
    let id = parseInt(req.params.id);
    log("Calling putCustomer with this id:",id);
    let customer = req.body;
    await customerModel.update(id, customer);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// //DELETE customers{id} : Delete all data on a given customer, if it exists
export async function deleteCustomer(req, res) {
  try {
    let id = parseInt(req.params.id);
    log("Calling deleteCustomer with this id:",id);
    await customerModel.remove(id);
    res.end();
  } catch (error) {
    res.status(400).send(error.message);
  }
}

//DEPRECATED METHOD, TRYING TO COME UP WITH SOMETHING BETTER.
// //Gets all the customer deets from the API to be used to 'login'
// export async function getCustomerId(req, res) {
//   try {
//     let email = parseInt(req.params.email);
//     console.log("Calling getCustomerId with this email: " + email);
//     let customer = await customerModel.getByEmail(email); 
//     res.json(customer); 
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// }