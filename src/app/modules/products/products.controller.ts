import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { ProductServices } from "./products.services";

const createProduct = catchAsync(async (req, res) => {
  const productData = req.body;
  const result = await ProductServices.createProduct(productData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product created successfully",
    data: result,
  });
});

const getAllProducts = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProducts();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product fetched successfully",
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
  getAllProducts,
};
