import { Request, Response } from 'express';
import CartItem, { ICartItem } from '../Models/cartItem.model';

// Create a new cart item
export const createCartItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { productId, itemQuantity } = req.body;

    const cartItem: ICartItem = new CartItem({ productId, itemQuantity });
    await cartItem.save();

    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all cart items for a specific cart
export const getCartItems = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const cartId = req.params.cartId;

    const cartItems = await CartItem.find({ cartId });

    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update the quantity of a cart item
export const updateCartItemQuantity = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const itemId = req.params.itemId;
    const { itemQuantity } = req.body;

    const cartItem = await CartItem.findById(itemId);

    if (!cartItem) {
      res.status(404).json({ error: 'Cart item not found' });
      return;
    }

    cartItem.itemQuantity = itemQuantity;
    await cartItem.save();

    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Remove a cart item
export const removeCartItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const itemId = req.params.itemId;

    const cartItem = await CartItem.findByIdAndRemove(itemId);

    if (!cartItem) {
      res.status(404).json({ error: 'Cart item not found' });
      return;
    }

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
