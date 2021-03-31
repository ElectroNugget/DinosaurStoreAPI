import * as customerModel from "./customers.model.js";

// export async function getAllCustomers(req, res) {
//   try {
//     let allCustomers = await customerModel.getAll();
//     res.json(allCustomers);
//   } catch (error) {
//     // res.statusMessage=
//     res.status(400).send(error.message);
//   }
// }

//postCustomer, getCustomer, putCustomer, deleteCustomer
//postCart, getCart, putCart, deleteCart

export async function postCustomer(req, res) {
  try{
    let newCustomer = req.body;
    await customerModel.add(newCustomer);
    res.end();
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function getCustomer(req, res) {
  try{
    let id = parseInt(req.params.id);
    let customer = await customerModel.getByID(id);
    res.json(customer); //How is this sent?
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function putCustomer(req, res) {
  try{
    let id = parseInt(req.params.id);
    let customer = req.body;
    await customerModel.update(id, customer);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function deleteCustomer(req, res) {
  try{
    let id = parseInt(req.params.id);
    await customerModel.remove(id);
    res.end();
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// export async function postCart(req, res) {
//   try{
//     let newCart = req.body;
//     await customerModel.addCart()
//   } catch (error) {
    
//   }
// }

// export async function getCart(req, res) {
//   try{

//   } catch (error) {
    
//   }
// }

// export async function putCart(req, res) {
//   try{

//   } catch (error) {
    
//   }
// }

// export async function deleteCart(req, res) {
//   try{

//   } catch (error) {
    
//   }
// }