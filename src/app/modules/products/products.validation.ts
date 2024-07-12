import { z } from "zod";

const productValidation = z.object({
  body: z.object({
    img: z.string(),
    category: z.string(),
    product_name: z.string(),
    description: z.string(),
    details: z.array(z.string()),
    rating: z.number().min(0).max(5),
    price: z.string(),
    brand: z.string(),
    stock: z.number().int().nonnegative(),
    delivery_type: z.enum(["Fast", "Free"]),
  }),
});

export default productValidation;
