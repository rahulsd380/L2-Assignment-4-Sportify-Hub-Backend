import express from 'express';
import { ProductControllers } from './products.controller';
import productValidation from './products.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();



router.post('/create-product', validateRequest(productValidation), ProductControllers.createProduct);
router.get('/', ProductControllers.getAllProducts);

export const productRoutes = router;