//Acts as the CONTROLLER for carts in this app.
import * as cartModel from "./cart.model.js";

// //POST cart : Creates a new customer
export async function postCart(req, res) {
  try {
    let newCart = req.body;
    await cartModel.add(newCart);
    res.end();
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// //GET cart{id} : Gets all data on a given cart, if it exists
export async function getCart(req, res) {
  try {
    let id = parseInt(req.params.id);
    let cart = await cartModel.getByID(id);
    res.json(cart); //How is this sent?
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// //PUT cart{id} : Update data on a given customer, if it exists
export async function putCart(req, res) {
  try {
    let id = parseInt(req.params.id);
    let cart = req.body;
    await cartModel.update(id, cart);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// //DELETE cart{id} : Delete all data on a given customer, if it exists
export async function deleteCart(req, res) {
  try {
    let id = parseInt(req.params.id);
    await cartModel.remove(id);
    res.end();
  } catch (error) {
    res.status(400).send(error.message);
  }
}