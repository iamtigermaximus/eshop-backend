import express from 'express';
import {
  createCartItem,
  getCartItems,
  updateCartItemQuantity,
  removeCartItem,
} from '../Controllers/cartItem.controller';

const router = express.Router();

// Create a new cart item
router.post('/cartItems', createCartItem);

// Get all cart items for a specific cart
router.get('/cartItems/:cartId', getCartItems);

// Update the quantity of a cart item
router.put('/cartItems/:itemId', updateCartItemQuantity);

// Remove a cart item
router.delete('/cartItems/:itemId', removeCartItem);

export default router;
