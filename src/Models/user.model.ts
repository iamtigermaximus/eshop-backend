import mongoose, { Schema, Document } from 'mongoose';
import { ICart } from './cart.model';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  initials: string;
  cart: ICart;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  initials: { type: String, required: true },
  cart: {
    type: Schema.Types.ObjectId,
    ref: 'Cart',
  },
});

export default mongoose.model<IUser>('User', UserSchema);
