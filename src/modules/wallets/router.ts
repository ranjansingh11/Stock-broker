import {Router} from 'express';
import WalletController from './WalletController';

const router = Router();

router.route('/')
    .get(WalletController.get);

router.route('/')
    .post(WalletController.create);

export default router;