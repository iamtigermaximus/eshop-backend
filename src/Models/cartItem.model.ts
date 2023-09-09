import mongoose, { Document, Schema } from 'mongoose';
import { IProduct } from './product.model';

export interface ICartItem extends Document {
  productId: IProduct;
  itemQuantity: number;
}

const CartItemSchema: Schema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
  itemQuantity: Number,
});

export default mongoose.model<ICartItem>('CartItem', CartItemSchema);
