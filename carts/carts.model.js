//Acts as the MODEL for carts in this app.
import e from 'express';
import * as fs from 'fs';
import { promisify } from "util";
const CARTS_FILE = "./carts/carts.json";

// Convert fs.readFile + writeFile into Promise version of same    
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

//Get a cart by a given ID. Returns an error if it does not exist.
export async function getByID(customerId) {
  let cartArray = await getAll();
  let index = find(cartArray, customerId);
  if (index === -1) {
    throw new Error(`Cart with ID: ${customerId} doesn't exist`);
  } else {
    return cartArray[index];
  }
}

//Create a new cart. Returns an error if the ID is already taken.
export async function addCart(newCart) {
  let cartArray = await getAll();
  if (find(cartArray, newCart.customerId) !== -1) {
    throw new Error(`Cart with ID: ${newCart.customerId} already exists`);
  } else {
    cartArray.push(newCart);
    await save(cartArray);
  }
}

//Make an ADD ITEM TO CART method?
// export async function addItem(customerId, productId) {
//   let cartArray = await getAll();
//   let index = find(cartArray, customerId);
//   if (index === -1) {
//     throw new Error(`Cannot add item. Cart with ID: ${customerId} doesn't exist`);
//   } else {
//     let productIndex = findProduct(cartArray[index])
//     if (productIndex  === -1) {
//       cartArray[index].push({"productId":productId,"quantity":1})
//     } else {
//       cartArray[index].quantity++;
//     }
//   }
// }
// Might not be necessary.

//Update an existing cart. Returns an error if there's no cart at the given ID.
export async function update(customerId, cart) {
  let cartArray = await getAll();
  let index = find(cartArray, customerId);
  if (index === -1) {
    throw new Error(`Cart with ID: ${customerId} doesn't exist`);
  } else {
    cartArray[index] = cart;
    await save(cartArray);
  }
}

//Delete an existing cart. Returns an error if there's no cart at the given ID.
export async function remove(customerId) {
  let cartArray = await getAll();
  let index = find(cartArray, customerId);
  if (index === -1) {
    throw new Error(`Cart with ID: ${customerId} doesn't exist`);
  } else {
    cartArray.splice(index, 1); // remove cart from array
    await save(cartArray);
  }
}

//HELPER FUNCTIONS://----------------------------------------------------------
//Return all carts on file.
export async function getAll() {
  try {
    let cartText = await readFile(CARTS_FILE);
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
  await writeFile(CARTS_FILE, cartText);
}

//Test function to check if cart ID exists.
function find(cartArray, Id) {
  return cartArray.findIndex((currCart) => currCart.customerId === Id);
}

//Test function to see if a specific product exists in a cart.
// Might not be needed.
// function findProduct(cartArray, Id) {
//   return cartArray.findIndex((currCart)=> currCart.productId === Id );
// }