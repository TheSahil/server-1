import {Router} from 'express';
import bodyParser from 'body-parser';
import {getAllController,getByNameController} from '../controllers/controller.js';

const router = Router();

router.get('/all',
    getAllController
)

router.get('/getByName/:name',
    getByNameController
)

export default router;