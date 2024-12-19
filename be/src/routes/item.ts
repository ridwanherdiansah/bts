import express from 'express';
import itemControllers from '../controllers/itemControllers';

const router = express.Router();

// Middleware
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Routes lainnya
router.get('/', itemControllers.getAllItem);
router.post('/', itemControllers.createItem);
router.patch('/:id', itemControllers.updateItem);
router.delete('/:id', itemControllers.deleteItem);


export default router;