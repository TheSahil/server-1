import Joi from 'joi';
import {getAllService} from '../services/service.js';

const getAllController = async (req, res, next) => {
    try {
        const data = await getAllService();
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

export {
    getAllController
}