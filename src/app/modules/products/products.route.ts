import express from 'express';
import { ProductControllers } from './products.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ProductValidation } from './products.validation';

const router = express.Router();

router.post('/create-product', validateRequest(ProductValidation.productValidation), ProductControllers.createProduct);
router.get('/', ProductControllers.getAllProducts);
router.put('/update-product/:id', ProductControllers.updateProduct);
router.delete('/delete-product/:id', ProductControllers.deleteProduct);

export const productRoutes = router;