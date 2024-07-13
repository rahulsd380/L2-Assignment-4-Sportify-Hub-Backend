import mongoose, { Schema } from "mongoose";
import { TCartItem } from "./cart.interface";

const CartSchema: Schema = new Schema<TCartItem>({
  img: { type: String, required: true },
  productId: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: String, required: true },
  product_name: { type: String, required: true },
});

export const Cart = mongoose.model<TCartItem>("Cart", CartSchema);
