import { Request, Response } from 'express';
import Cart, { ICart } from '../Models/cart.model';
import CartItem, { ICartItem } from '../Models/cartItem.model';

// Create a new cart
export const createCart = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId } = req.body;

    // Check if a cart for the user already exists
    const existingCart = await Cart.findOne({ userId });

    if (existingCart) {
      res.status(400).json({ error: 'Cart already exists for this user' });
      return;
    }

    const cart: ICart = new Cart({ userId });
    await cart.save();

    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.userId;

    const cart = await Cart.findOne({ userId }).populate('items');

    if (!cart) {
      res.status(404).json({ error: 'Cart not found' });
      return;
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const addItemToCart = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.params.userId;
    const { productId, itemQuantity } = req.body;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      res.status(404).json({ error: 'Cart not found' });
      return;
    }

    // Check if the cart item already exists for the given product
    const existingCartItem = cart.items.find(
      (item) => item.productId.toString() === productId
    );

    if (existingCartItem) {
      // Update the quantity of the existing cart item
      existingCartItem.itemQuantity += itemQuantity;
      await existingCartItem.save();
    } else {
      // Create a new cart item
      const cartItem: ICartItem = new CartItem({ productId, itemQuantity });
      cart.items.push(cartItem);
      await cart.save();
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const removeItemFromCart = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.params.userId;
    const itemId = req.params.itemId;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      res.status(404).json({ error: 'Cart not found' });
      return;
    }

    // Find the cart item and remove it from the items array
    const cartItemIndex = cart.items.findIndex(
      (item) => item._id.toString() === itemId
    );

    if (cartItemIndex === -1) {
      res.status(404).json({ error: 'Cart item not found' });
      return;
    }

    cart.items.splice(cartItemIndex, 1);
    await cart.save();

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update the quantity of a product in the cart
export const updateItemQuantity = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.params.userId;
    const itemId = req.params.itemId;
    const { itemQuantity } = req.body;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      res.status(404).json({ error: 'Cart not found' });
      return;
    }

    // Find the cart item and update its quantity
    const cartItem = cart.items.find((item) => item._id.toString() === itemId);

    if (!cartItem) {
      res.status(404).json({ error: 'Cart item not found' });
      return;
    }

    cartItem.itemQuantity = itemQuantity;
    await cartItem.save();

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteCart = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deletedCart: ICart | null = await Cart.findByIdAndDelete(
      req.params.id
    );
    if (!deletedCart) {
      res.status(404).json({ error: 'Cart not found' });
      return;
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
