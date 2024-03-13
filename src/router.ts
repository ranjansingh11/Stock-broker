import {Router} from 'express';
import userRouter from './modules/users/router';
import stockRouter from './modules/stocks/router';
import holdingRouter from './modules/holdings/router';
import walletRouter from './modules/wallets/router';
import orderRouter from './modules/orders/router';

const router = Router();

router.get('/welcome', (req, res) => {
    console.log(`Welcome to stock broking app`);
    res.send(`Broker service is up`);
});

router.use('/users', userRouter);
router.use('/stocks', stockRouter);
router.use('/holdings', holdingRouter);
router.use('/wallets', walletRouter);
router.use('/orders', orderRouter);

export default router;