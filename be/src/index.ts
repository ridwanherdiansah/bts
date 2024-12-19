import express from 'express';
import 'dotenv/config';
import path from 'path';
import authRoutes from './routes/auth';
import checklistRoutes from './routes/checklist';
import itemRoutes from './routes/item';

import middlewareLogRequest from './middleware/logs';
import jwtToken from './middleware/auth';

const app = express();
const PORT = process.env.APP_PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(middlewareLogRequest);

// Routes
app.use('/auth', authRoutes);
app.use('/checklist', jwtToken.auth, checklistRoutes);
app.use('/checklist/:id/item', jwtToken.auth, itemRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`${process.env.APP_NAME} berjalan di port ${PORT}`);
});
