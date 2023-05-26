import { getConnection } from "../db/connection";
import { querys } from "../db/querys";

export const getAllTasks = async(req,res)=>{
    try {
        const pool = await getConnection();
        const tasks = await pool
        .request()
        .input("id", req.params.id)
        .query(querys.getAllProductsById);

        return res.json(tasks.recordset);
    } catch (error) {
        console.log(error)
    }
}