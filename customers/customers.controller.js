import * as customerModel from "./customers.model.js";

export async function getAllCustomers(req, res) {
  try {
    let allCustomers = await customerModel.getAll();
    res.json(allCustomers);
  } catch (error) {
    // res.statusMessage=
    res.status(400).send(error.message);
  }
}

//postCustomer, getCustomer, putCustomer, deleteCustomer
//postCart, getCart, putCart, deleteCart