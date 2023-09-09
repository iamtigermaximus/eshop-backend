import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './user.model';
import { ICartItem } from './cartItem.model';

export interface ICart extends Document {
  userId: IUser;
  items: ICartItem[];
}

const CartSchema: Schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    unique: true,
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'CartItem',
    },
  ],
});

export default mongoose.model<ICart>('Cart', CartSchema);
