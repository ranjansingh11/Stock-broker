import { Router } from 'express';
import HoldingController from './HoldingController';

const router = Router();

router.route('/')
    .post(HoldingController.create);

router.route('/:email')
    .get(HoldingController.fetch);

export default router;
   
    