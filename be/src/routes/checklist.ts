import express from 'express';
import checklistControllers from '../controllers/checklistControllers';

const router = express.Router();

// Middleware
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Routes lainnya
router.get('/', checklistControllers.getAllChecklist);

export default router;