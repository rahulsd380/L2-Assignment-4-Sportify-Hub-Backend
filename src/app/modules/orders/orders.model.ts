import { Schema, model } from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema: Schema = new Schema<TOrder>(
  {
    customer_name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    shipping_address: { type: String, required: true },
    delivery_amount: { type: Number, required: true },
    sub_total: { type: Number, required: true },
    total: { type: Number, required: true },
    vat: { type: Number, required: true },
    products: [
      {
        product_name: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Order = model<TOrder>('Order', orderSchema);