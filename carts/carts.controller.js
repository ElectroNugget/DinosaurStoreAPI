//Acts as the CONTROLLER for carts in this app.
import * as cartsModel from "./carts.model.js";

// //POST customers/{id}/cart : Create a cart for a specific user
export async function postCart(req, res) {
  try {
    let newCart = req.body;
    console.log("Calling postCart with this data: " + newCart);
    await cartsModel.add(newCart);
    res.end();
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// //GET customers/{id}/cart : Gets all data on a given cart, if it exists
export async function getCart(req, res) {
  try {
    let id = parseInt(req.params.id);
    console.log("Calling getCart with this id: " + id);
    let cart = await cartsModel.getByID(id);
    res.json(cart);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// //PUT customers/{id}/cart : Update data on a given cart, if it exists
export async function putCart(req, res) {
  try {
    let id = parseInt(req.params.id);
    console.log("Calling putCart with this id: " + id);
    let cart = req.body;
    await cartsModel.update(id, cart);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// //DELETE customers/{id}/cart : Empty a specific cart, if it exists
export async function deleteCart(req, res) {
  try {
    let id = parseInt(req.params.id);
    console.log("Calling deleteCart with this id: " + id);
    await cartsModel.remove(id);
    res.end();
  } catch (error) {
    res.status(400).send(error.message);
  }
}
