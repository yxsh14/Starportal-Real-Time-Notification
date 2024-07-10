import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './db/index.js';
import authRoutes from './routes/authRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';
import { initWebSocket, consumeFromQueue } from './services/realTimeService.js';

dotenv.config({ path: './.env' });

connectDB()
const app = express();
const port = process.env.PORT || 8000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/notifications', notificationRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    consumeFromQueue('notifications');
    initWebSocket(server);
});
