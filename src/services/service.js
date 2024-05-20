import sql from '../util/sql.js';
import Constants from '../constants/constants.js';

const getAllService = async () => {
    try {
        let query = Constants.SQL.GET_ALL;
        let res = await sql.query(query);
        // console.log(res)
        return res[0];
    }
    catch (error) {
        throw error;
    }
}

export {
    getAllService
}