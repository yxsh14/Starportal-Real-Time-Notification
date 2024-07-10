import express from 'express';
import {
    createNotification,
    getAllNotifications,
    getNotificationById,
    markNotificationAsRead,
} from '../controllers/notificationController.js';
import { authMiddleware } from '../utils/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createNotification);
router.get('/', authMiddleware, getAllNotifications);
router.get('/:id', authMiddleware, getNotificationById);
router.put('/:id', authMiddleware, markNotificationAsRead);

export default router;
