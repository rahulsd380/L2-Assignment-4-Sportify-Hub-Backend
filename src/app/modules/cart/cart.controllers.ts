import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { CartServices } from "./cart.services";

const postOnCart = catchAsync(async (req, res) => {
  const productData = req.body;
  const result = await CartServices.postOnCart(productData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product created successfully",
    data: result,
  });
});

const getAllCartProducts = catchAsync(async (req, res) => {
  const result = await CartServices.getAllCartProducts();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products fetched successfully",
    data: result,
  });
});

const deleteProductFromCart = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CartServices.deleteProductFromCart(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product deleted successfully",
    data: result,
  });
});

const updateCartProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CartServices.updateCartProduct(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product quantity updated successfully",
    data: result,
  });
});

export const CartControllers = {
  postOnCart,
  getAllCartProducts,
  updateCartProduct,
  deleteProductFromCart,
};
