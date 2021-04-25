//Acts as the CONTROLLER for customers in this app.
import * as customerModel from "./customers.model.js";

// //POST customers : Creates a new customer
export async function postCustomer(req, res) {
  try {
    let newCustomer = req.body;
    console.log("Calling postCustomer with this data:" + newCustomer);
    await customerModel.add(newCustomer);
    res.end();
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// //GET customers{id} : Gets all data on a given customer, if it exists
export async function getCustomer(req, res) {
  try {
    let id = parseInt(req.params.id);
    console.log("Calling getCustomer with this id:" + id);
    let customer = await customerModel.getByID(id);
    res.json(customer); //How is this sent?
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// //PUT customers{id} : Update data on a given customer, if it exists
export async function putCustomer(req, res) {
  try {
    let id = parseInt(req.params.id);
    console.log("Calling putCustomer with this id:" + id);
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
    console.log("Calling deleteCustomer with this id:" + id);
    await customerModel.remove(id);
    res.end();
  } catch (error) {
    res.status(400).send(error.message);
  }
}
