import { TProduct } from "./products.interface";
import { Product } from "./products.model";


const createProduct = async (payload : TProduct) => {
 const result = await Product.create(payload);
 return result;
};

const getAllProducts = async () => {
 const result = await Product.find();
 return result;
};

const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

const updateProduct = async (id : string, payload : Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};