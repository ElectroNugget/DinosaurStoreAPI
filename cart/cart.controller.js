//Acts as the CONTROLLER for carts in this app.
import * as customerModel from "./cart.model.js";

// //POST customers : Creates a new customer
export async function postCart(req, res) {
  try {
    let newCustomer = req.body;
    await customerModel.add(newCustomer);
    res.end();
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// //GET customers{id} : Gets all data on a given customer, if it exists
export async function getCart(req, res) {
  try {
    let id = parseInt(req.params.id);
    let customer = await customerModel.getByID(id);
    res.json(customer); //How is this sent?
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// //PUT customers{id} : Update data on a given customer, if it exists
export async function putCart(req, res) {
  try {
    let id = parseInt(req.params.id);
    let customer = req.body;
    await customerModel.update(id, customer);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// //DELETE customers{id} : Delete all data on a given customer, if it exists
export async function deleteCart(req, res) {
  try {
    let id = parseInt(req.params.id);
    await customerModel.remove(id);
    res.end();
  } catch (error) {
    res.status(400).send(error.message);
  }
}