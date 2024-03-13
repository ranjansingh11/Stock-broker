import {Router} from 'express';

const router = Router();

router.get('/', (req, res)=> {
    res.send(`Stock Info`);
});

export default router;