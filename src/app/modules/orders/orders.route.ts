import express from 'express';
import { OrderControllers } from './orders.controller';

const router = express.Router();

router.post('/create-order', OrderControllers.createOrder);
router.get('/', OrderControllers.getAllOrders);
// router.put('/update-product/:id', ProductControllers.updateProduct);
// router.delete('/delete-product/:id', ProductControllers.deleteProduct);

export const orderRoutes = router;