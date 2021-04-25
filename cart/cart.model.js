//Acts as the MODEL for carts in this app.
import * as fs from "fs/promises";
const CART_FILE = "./cart/cart.json";

//Get a cart by a given ID. Returns an error if it does not exist.
export async function getByID(cartId) {
  let cartArray = await getAll();
  let index = find(cartArray, cartId);
  if (index === -1) {
    throw new Error(`Cart with ID: ${cartId} doesn't exist`);
  } else {
    return cartArray[index];
  }
}

//Create a new cart. Returns an error if the ID is already taken.
export async function add(newCart) {
  let cartArray = await getAll();
  if (find(cartArray, newCart.cartId) !== -1) {
    throw new Error(`Cart with ID: ${newCart.cartId} already exists`);
  } else {
    cartArray.push(newCart);
    await save(cartArray);
  }
}

//Update an existing cart. Returns an error if there's no cart at the given ID.
export async function update(cartId, cart) {
  let cartArray = await getAll();
  let index = find(cartArray, cartId);
  if (index === -1) {
    throw new Error(`Cart with ID: ${cartId} doesn't exist`);
  } else {
    cartArray[index] = cart;
    await save(cartArray);
  }
}

//Delete an existing cart. Returns an error if there's no cart at the given ID.
export async function remove(cartId) {
  let cartArray = await getAll();
  let index = find(cartArray, cartId);
  if (index === -1) {
    throw new Error(`Cart with ID: ${cartId} doesn't exist`);
  } else {
    cartArray.splice(index, 1); // remove cart from array
    await save(cartArray);
  }
}

//HELPER FUNCTIONS://----------------------------------------------------------
//Return all carts on file.
export async function getAll() {
  try {
    let cartText = await fs.readFile(CART_FILE);
    let cart = JSON.parse(cartText);
    return cart;
  } catch (error) {
    if (error.code === "ENOENT") {
      await save([]);
      return [];
    } else {
      throw error;
    }
  }
}

//Save an array of carts to file.
async function save(cart = []) {
  let cartText = JSON.stringify(cart);
  await fs.writeFile(CART_FILE, cartText);
}

//Test function to check if cart ID exists.
function find(cartArray, Id) {
  return cartArray.findIndex((currCart) => currCart.cartId === Id);
}
