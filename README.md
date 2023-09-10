

# ESHOP BACKEND

This repository contains the backend code for an eShop store built using NodeJS, Express, Typescript and MongoDB as database
## Table of Contents
- [Backend](#backend-technologies)
- [Getting Started](#getting-started)
- [Endpoints](#endpoints)


## Backend <a name="backend-technologies"></a> 

- NodeJS
- Express
- Typescript
- MongoDB

## Getting Started  <a name="getting-started"></a> 

To run the eShop backend on your local machine, follow these steps:

- Clone the repository: git clone https://github.com/iamtigermaximus/eshop-backend.git
- Navigate to the eshop-backend directory: cd eshop-backend
- Install dependencies: npm install
- Start the backend development server: npm start


## Endpoints <a name="endpoints"></a> 

| Method |       Endpoint                    |          Description                 | Authorization |
|--------|-----------------------------------|--------------------------------------|---------------|
| Post   | api/auth/login                    | Login and obtain JWT token           | Not required  |
| Post   | api/auth/register                 | Register for an account              |               |
|        |                                   |                                      |               |
| Get    | api/products                      | Get a list of all products           | Not required  |
| Get    | api/products/:id                  | Get a single product by ID           | Not required  |
| Post   | api/products                      | Create a new product                 | Bearer Token  |
| Put    | api/products/:id                  | Update an existing product by ID     | Bearer Token  |
| Delete | api/products/:id                  | Delete an product by ID              | Bearer Token  |
|        |                                   |                                      |               |
| Get    | api/categories                    | Get a list of all categories         | Not required  |
| Get    | api/categories/:id                | Get a single category by ID          | Not required  |
| Post   | api/categories                    | Create a new category                | Bearer Token  |
| Put    | api/categories/:id                | Update an existing category by ID    | Bearer Token  |
| Delete | api/categories/:id                | Delete an category by ID             | Bearer Token  |
|        |                                   |                                      |               |
| Post   | api/carts                         | Create a new cart                    | Not required  |
| Get    | api/carts/:userId                 | Get cart by userID                   | Bearer Token  |
| Post   | api/carts/:userId/add             | Add item to cart                     | Bearer Token  |
| Delete | api/carts/:userId/remove/:itemId  | Remove item from cart                | Bearer Token  |
| Put    | api/carts/:userId/update/:itemId  | Update item quantity                 | Bearer Token  |
| Delete | api/carts/:userId                 | Delete cart                          | Bearer Token  |
|        |                                   |                                      |               |
| Get    | api/cartItems/:cartId             | Get cart items for a specific cart   | Not required  |
| Post   | api/cartItems                     | Create a new cart item               | Bearer Token  |
| Put    | api/cartItems/:itemId             | Update cart item quantity            | Bearer Token  |
| Delete | api/cartItems/:itemId             | Delete cart item                     | Bearer Token  |
|        |                                   |                                      |               |
| Get    | api/users                         | Get a list of all users              | Not required  |
| Get    | api/users/:id                     | Get a single user by ID              | Not required  |
| Post   | api/users                         | Create a new user                    | Not required  |
| Put    | api/users/:id                     | Update an existing user by ID        | Not required  |
| Delete | api/users/:id                     | Delete an user by ID                 | Not required  |
