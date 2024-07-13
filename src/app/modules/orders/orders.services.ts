import { Cart } from "../cart/cart.model";
import { TOrder } from "./order.interface";
import { Order } from "./orders.model";


const createOrder = async (payload: TOrder) => {
    // Create order
    const result = await Order.create(payload);
  
    if (result?._id) {
      try {
        const deletedResult = await Cart.deleteMany();
        return deletedResult;
      } catch (error) {
        console.error("Failed to delete cart items:", error);
      }
    }
  };

const getAllOrders = async () => {
 const result = await Order.find();
 return result;
};

// const deleteProduct = async (id: string) => {
//   const result = await Product.findByIdAndDelete(id);
//   return result;
// };

// const updateProduct = async (id : string, payload : Partial<TProduct>) => {
//   const result = await Product.findByIdAndUpdate(id, payload, {
//     new: true,
//     runValidators: true,
//   });
//   return result;
// };

export const OrderServices = {
  createOrder,
  getAllOrders,
};