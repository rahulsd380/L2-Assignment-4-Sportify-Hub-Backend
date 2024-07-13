import { Router } from "express";
import { productRoutes } from "../modules/products/products.route";
import { cartRoutes } from "../modules/cart/cart.route";
import { orderRoutes } from "../modules/orders/orders.route";
const router = Router();

const moduleRoutes = [
  {
    path: "/products",
    route: productRoutes,
  },
  {
    path: "/cart",
    route: cartRoutes,
  },
  {
    path: "/orders",
    route: orderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
