import { Schema, model } from 'mongoose';
import { TProduct } from './products.interface';

const productSchema: Schema = new Schema<TProduct>(
  {
    img: { type: String, required: true },
    category: { type: String, required: true },
    product_name: { type: String, required: true },
    description: {type: String, required: true},
  details : {type: [String], required: true},
    rating: { type: Number, required: true, min: 0, max: 5 },
    price: { type: String, required: true },
    brand: { type: String, required: true },
    stock: { type: Number, required: true, min: 0 },
    delivery_type: {
      type: String,
      required: true,
      enum: ['Fast', 'Free'],
    },
  },
  {
    timestamps: true,
  }
);

export const Product = model<TProduct>('Product', productSchema);
