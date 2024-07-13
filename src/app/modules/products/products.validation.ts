import { z } from "zod";

const productValidation = z.object({
  body: z.object({
    img: z.string(),
    category: z.string(),
    product_name: z.string(),
    description: z.string(),
    details: z.string().optional(),
    rating: z.number().min(0).max(5).optional(),
    price: z.string(),
    brand: z.string(),
    stock: z.number().int().nonnegative(),
    delivery_type: z.enum(["Fast", "Free"]),
  }),
});

const updateProductValidation = z.object({
  body: z.object({
    img: z.string().optional(),
    category: z.string().optional(),
    product_name: z.string().optional(),
    description: z.string().optional(),
    details: z.string().optional(),
    rating: z.number().min(0).max(5).optional(),
    price: z.string().optional(),
    brand: z.string().optional(),
    stock: z.number().int().nonnegative().optional(),
    delivery_type: z.enum(["Fast", "Free"]).optional(),
  }),
});

export const ProductValidation = {
  productValidation,
  updateProductValidation
}
