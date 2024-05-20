import {Router} from 'express';
import bodyParser from 'body-parser';
import {getAllController} from '../controllers/controller.js';

const router = Router();

router.get('/all',
    getAllController
)

export default router;