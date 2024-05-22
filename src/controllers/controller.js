import Joi from 'joi';
import {getAllService, getByNameService} from '../services/service.js';

const getAllController = async (req, res, next) => {
    try {
        const data = await getAllService();
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

const getByNameController = async (req, res, next) => {
    try {
        const name = req.params.name;
        const data = await getByNameService(name);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

export {
    getAllController,
    getByNameController
}