import {Router} from 'express';
import OrderController from './OrderController';

const router = Router();

router.route('/')
    .post(OrderController.create);

export default router;