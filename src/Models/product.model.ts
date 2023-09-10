import mongoose, { Document, Schema } from 'mongoose';
import { ICategory } from './category.model';

export interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
  image: string;
  category: ICategory;
}

const ProductSchema: Schema = new Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  categoryName: String,
});

export default mongoose.model<IProduct>('Product', ProductSchema);
