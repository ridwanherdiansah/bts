import { Request, Response } from 'express';
import ItemModels from '../models/item';

class ItemControllers {
    static getAllItem = async (req: Request, res: Response) => {
        try {
            const [data] = await ItemModels.get();

            res.json({
                message: 'Get All Item',
                data: data
            });
        } catch (error:any) {
            res.status(500).json({ 
                message: 'Server Error',
                serverMessage: error.message 
            });
        }
    }

    static createItem = async (req:Request, res:Response) => {
        try {
            const body = req.body;
            const [data] = await ItemModels.create(body);

            res.json({
                message: 'Create Success',
                data:data,
            });
        } catch (error:any) {
            res.status(500).json({ 
                message: 'Server Error',
                serverMessage: error.message 
            });
        }
    }

    static updateItem = async (req:Request, res:Response) => {
        try {
            const body = req.body;
            const id = parseInt(req.params.id);
            const [data] = await ItemModels.update(body, {id});

            res.json({
                message: 'Updated Success',
                data: data
            })
        } catch (error:any) {
            res.status(500).json({ 
                message: 'Server Error',
                serverMessage: error.message 
            });
        }
    }

    static deleteItem = async (req:Request, res:Response) => {
        try {
            const id = parseInt(req.params.id);
            const [data] = await ItemModels.destroy({id});

            res.json({
                message: 'Delete Success',
            })
        } catch (error:any) {
            res.status(500).json({
                message: 'Server Error',
                serverMessage: error.message
            });
        }
    }
}

export default ItemControllers;
