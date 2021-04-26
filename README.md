# DinosaurStoreAPI
 This is the repository for mini-project 2 of my course, Frameworks and Architectures for the Web at ITU in the Spring of 2021.

## Functions
The intent was to develop a functional RESTful web API that could feasibly provide data for our mini-project 1. In this case, I developed an online webstore that sells dinosaurs.

We were to meet these requirements:
* API should be developed in JavaScript using Node.js and Express framework.
* API should use JSON as data format in HTTP messages.
* Data about products, categories, users and the shopping basket content should be stored on the web server in a one (or several) JSON file(s) in JSON format.

## Structure
The API is split into 3 separate MVC models: one for each the customers, products and carts. Carts are attached to a customer by each containing a customerId that links the two.

Testing pages are provided to be used with the VSCode extension REST Client for VSCode that allows one to check if the requests work as expected.