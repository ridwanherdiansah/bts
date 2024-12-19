import { Request, Response } from 'express';
import ChecklistModels from '../models/checklist';

class ChecklistsControllers {
    static getAllChecklist = async (req: Request, res: Response) => {
        try {
            const [data] = await ChecklistModels.get();

            res.json({
                message: 'Get All Checklist',
                data: data
            });
        } catch (error:any) {
            res.status(500).json({ 
                message: 'Server Error',
                serverMessage: error.message 
            });
        }
    }

    static createChecklist = async (req:Request, res:Response) => {
        try {
            const body = req.body;

            // konfigurasi multer untuk menyimpan file
            if (req.file) {
                body.imageUrl = `/uploads/${req.file.filename}`;
            }
            
            const [data] = await ChecklistModels.create(body);

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

    static updateChecklist = async (req:Request, res:Response) => {
        try {
            const body = req.body;
            const id = parseInt(req.params.id);
            const [data] = await ChecklistModels.update(body, {id});

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

    static deleteChecklist = async (req:Request, res:Response) => {
        try {
            const id = parseInt(req.params.id);
            const [data] = await ChecklistModels.destroy({id});

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

export default ChecklistsControllers;
