import express from 'express';
import checklistControllers from '../controllers/checklistControllers';

const router = express.Router();

// Middleware
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Routes lainnya
router.get('/', checklistControllers.getAllChecklist);
router.post('/', checklistControllers.createChecklist);
router.patch('/:id', checklistControllers.updateChecklist);
router.delete('/:id', checklistControllers.deleteChecklist);


export default router;