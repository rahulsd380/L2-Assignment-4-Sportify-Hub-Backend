import { TCartItem } from "./cart.interface";
import { Cart } from "./cart.model";

const postOnCart = async (payload: TCartItem) => {
  const result = await Cart.create(payload);
  return result;
};

const getAllCartProducts = async () => {
  const result = await Cart.find();
  return result;
};

const deleteProductFromCart = async (id: string) => {
  const result = await Cart.findByIdAndDelete(id);
  return result;
};

const updateCartProduct = async (id: string, payload: Partial<TCartItem>) => {
  const result = await Cart.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const CartServices = {
  postOnCart,
  getAllCartProducts,
  updateCartProduct,
  deleteProductFromCart,
};
