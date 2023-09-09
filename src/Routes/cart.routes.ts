import { Router } from 'express';
import {
  createCart,
  getCart,
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  deleteCart,
} from '../Controllers/cart.controller';

const router: Router = Router();

router.post('/carts', createCart);
router.get('/carts/:userId', getCart);
router.post('/carts/:userId/add', addItemToCart);
router.delete('/carts/:userId/remove/:itemId', removeItemFromCart);
router.put('/carts/:userId/update/:itemId', updateItemQuantity);
router.delete('/carts/:userId', deleteCart);

export default router;
