import mongoose, { Document, Schema } from 'mongoose';

export interface ICategory extends Document {
  name: string;
}

const CategorySchema: Schema = new Schema({
  name: String,
});

export default mongoose.model<ICategory>('Category', CategorySchema);
