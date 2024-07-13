import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { OrderServices } from "./orders.services";

const createOrder = catchAsync(async (req, res) => {
  const productData = req.body;
  const result = await OrderServices.createOrder(productData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order placed successfully",
    data: result,
  });
});

const getAllOrders = catchAsync(async (req, res) => {
  const result = await OrderServices.getAllOrders();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Orders fetched successfully",
    data: result,
  });
});

// const deleteOrder = catchAsync(async (req, res) => {
//   const { id } = req.params;
//   const result = await ProductServices.deleteProduct(id);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Product deleted successfully",
//     data: result,
//   });
// });

// const updateOrder = catchAsync(async (req, res) => {
//   const {id} = req.params;
//   const result = await ProductServices.updateProduct(id, req.body);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Product updated successfully",
//     data: result,
//   });
// });

export const OrderControllers = {
  createOrder,
  getAllOrders,
}
