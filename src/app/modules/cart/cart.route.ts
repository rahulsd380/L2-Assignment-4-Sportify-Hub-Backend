import express from 'express';
import { CartControllers } from './cart.controllers';

const router = express.Router();

router.post('/post-on-cart', CartControllers.postOnCart);
router.get('/', CartControllers.getAllCartProducts);
router.put('/update-cart-product/:id', CartControllers.updateCartProduct);
router.delete('/delete-cart-product/:id', CartControllers.deleteProductFromCart);

export const cartRoutes = router;