import { Router } from "express";
import { productRoutes } from "../modules/products/products.route";
const router = Router();

const moduleRoutes = [
  {
    path: "/products",
    route: productRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
