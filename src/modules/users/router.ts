import {Router} from 'express';
import controller from './UserController';

const router = Router();


router.route('/')
     .post(controller.create);

export default router;